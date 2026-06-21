import type { Middleware, Placement, Strategy } from '@floating-ui/react';
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
  strategy?: Strategy;
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

export const useFloatingPosition = ({
  open,
  onOpenChange,
  placement: initialPlacement = 'bottom-start',
  strategy = 'fixed',
  matchTriggerWidth = false,
  middleware: customMiddleware = [],
}: UseFloatingPositionProps = {}): UseFloatingPositionReturn => {
  const middleware: Middleware[] = [
    offset(6),
    flip(),
    size({
      apply({ rects, elements }) {
        if (!matchTriggerWidth) return;

        Object.assign(elements.floating.style, {
          width: `${rects.reference.width}px`,
        });
      },
    }),
    shift({ padding: 8 }),
    ...customMiddleware,
  ];

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
    strategy,
    transform: false,
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
