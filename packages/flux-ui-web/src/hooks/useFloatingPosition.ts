import type { Middleware, Placement } from '@floating-ui/react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useFloating,
} from '@floating-ui/react';

interface UseFloatingPositionProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
  matchTriggerWidth?: boolean;
  middleware?: Middleware[];
}

export interface UseFloatingPositionReturn {
  context: ReturnType<typeof useFloating>['context'];
  placement: Placement;
  middlewareData: ReturnType<typeof useFloating>['middlewareData'];
  floatingStyles: ReturnType<typeof useFloating>['floatingStyles'];
  setRef: ReturnType<typeof useFloating>['refs']['setReference'];
  setFloatingRef: ReturnType<typeof useFloating>['refs']['setFloating'];
  updatePosition: ReturnType<typeof useFloating>['update'];
}

//Позиционирование dropdown / tooltip / popover
export const useFloatingPosition = ({
  open,
  onOpenChange,
  placement: initialPlacement = 'bottom-start',
  matchTriggerWidth = false,
  middleware: customMiddleware = [],
}: UseFloatingPositionProps = {}): UseFloatingPositionReturn => {
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
