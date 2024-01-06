import * as React from "react";
import * as SidePanelPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const SidePanel = SidePanelPrimitive.Root;

const SidePanelTrigger = SidePanelPrimitive.Trigger;

const SidePanelClose = SidePanelPrimitive.Close;

const SidePanelPortal = SidePanelPrimitive.Portal;

const SidePanelOverlay = React.forwardRef<
  React.ElementRef<typeof SidePanelPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SidePanelPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SidePanelPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SidePanelOverlay.displayName = SidePanelPrimitive.Overlay.displayName;

const SidePanelVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SidePanelContentProps
  extends React.ComponentPropsWithoutRef<typeof SidePanelPrimitive.Content>,
    VariantProps<typeof SidePanelVariants> {}

const SidePanelContent = React.forwardRef<
  React.ElementRef<typeof SidePanelPrimitive.Content>,
  SidePanelContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SidePanelPortal>
    <SidePanelOverlay />
    <SidePanelPrimitive.Content
      ref={ref}
      className={cn(SidePanelVariants({ side }), className)}
      {...props}
    >
      {children}
      <SidePanelPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SidePanelPrimitive.Close>
    </SidePanelPrimitive.Content>
  </SidePanelPortal>
));
SidePanelContent.displayName = SidePanelPrimitive.Content.displayName;

const SidePanelHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SidePanelHeader.displayName = "SidePanelHeader";

const SidePanelFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SidePanelFooter.displayName = "SidePanelFooter";

const SidePanelTitle = React.forwardRef<
  React.ElementRef<typeof SidePanelPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SidePanelPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SidePanelPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SidePanelTitle.displayName = SidePanelPrimitive.Title.displayName;

const SidePanelDescription = React.forwardRef<
  React.ElementRef<typeof SidePanelPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SidePanelPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SidePanelPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SidePanelDescription.displayName = SidePanelPrimitive.Description.displayName;

export {
  SidePanel,
  SidePanelPortal,
  SidePanelOverlay,
  SidePanelTrigger,
  SidePanelClose,
  SidePanelContent,
  SidePanelHeader,
  SidePanelFooter,
  SidePanelTitle,
  SidePanelDescription,
};
