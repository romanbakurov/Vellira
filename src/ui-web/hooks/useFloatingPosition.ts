import type { Middleware, Placement } from '@floating-ui/react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useFloating,
} from '@floating-ui/react';

type UseFloatingPositionProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
  matchTriggerWidth?: boolean;
  middleware?: Middleware[];
};

//Позиционирование dropdown / tooltip / popover
export const useFloatingPosition = ({
  open,
  onOpenChange,
  placement: initialPlacement = 'bottom-start',
  matchTriggerWidth = false,
  middleware: customMiddleware = [],
}: UseFloatingPositionProps = {}) => {
  const middleware: Middleware[] = [
    offset(8),
    flip(),
    shift({ padding: 8 }),
    ...customMiddleware,
  ];

  if (matchTriggerWidth) {
    middleware.push(
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      })
    );
  }

  const {
    refs,
    floatingStyles,
    update,
    context,
    middlewareData,
    placement: resolvedPlacement,
  } = useFloating({
    open,
    onOpenChange,
    placement: initialPlacement,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  return {
    context,
    placement: resolvedPlacement,
    middlewareData,
    floatingStyles,
    setRef: refs.setReference,
    setFloatingRef: refs.setFloating,
    updatePosition: update,
  };
};
