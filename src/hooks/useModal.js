import { useEffect, useRef } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Comportamiento accesible común para ventanas modales:
 * - bloquea el scroll de la página (incluido Lenis) mientras está abierta
 * - lleva el foco al diálogo, lo mantiene dentro (Tab) y lo devuelve al botón que la abrió
 * - se cierra con Escape
 * `onKey` permite agregar atajos propios (por ejemplo las flechas de un visor de fotos).
 */
export default function useModal({ isOpen, onClose, onKey, dialogRef, triggerRef }) {
  const onCloseRef = useRef(onClose);
  const onKeyRef = useRef(onKey);

  useEffect(() => {
    onCloseRef.current = onClose;
    onKeyRef.current = onKey;
  });

  // Bloquear el scroll del fondo (Lenis intercepta la rueda del mouse, por eso se detiene con lenis.stop())
  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('overflow-hidden');
    document.documentElement.classList.add('overflow-hidden');
    window.lenis?.stop();
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
      window.lenis?.start();
    };
  }, [isOpen]);

  // Foco inicial, Escape, foco atrapado y retorno del foco
  useEffect(() => {
    if (!isOpen) return;
    const trigger = triggerRef.current;
    dialogRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      onKeyRef.current?.(e);
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll(FOCUSABLE);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen, dialogRef, triggerRef]);
}
