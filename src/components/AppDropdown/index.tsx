import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Dropdown = DropdownPrimitive.Root;

const DropdownGroup = DropdownPrimitive.Group;

const DropdownValue = DropdownPrimitive.Value;

const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <DropdownPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <DropdownPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </DropdownPrimitive.Icon>
  </DropdownPrimitive.Trigger>
));
DropdownTrigger.displayName = DropdownPrimitive.Trigger.displayName;

const DropdownScrollUpButton = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </DropdownPrimitive.ScrollUpButton>
));
DropdownScrollUpButton.displayName =
  DropdownPrimitive.ScrollUpButton.displayName;

const DropdownScrollDownButton = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </DropdownPrimitive.ScrollDownButton>
));
DropdownScrollDownButton.displayName =
  DropdownPrimitive.ScrollDownButton.displayName;

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <DropdownPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <DropdownScrollUpButton />
      <DropdownPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-Dropdown-trigger-height)] w-full min-w-[var(--radix-Dropdown-trigger-width)]"
        )}
      >
        {children}
      </DropdownPrimitive.Viewport>
      <DropdownScrollDownButton />
    </DropdownPrimitive.Content>
  </DropdownPrimitive.Portal>
));
DropdownContent.displayName = DropdownPrimitive.Content.displayName;

const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
DropdownLabel.displayName = DropdownPrimitive.Label.displayName;

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default Dropdown-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownPrimitive.ItemIndicator>
    </span>

    <DropdownPrimitive.ItemText>{children}</DropdownPrimitive.ItemText>
  </DropdownPrimitive.Item>
));
DropdownItem.displayName = DropdownPrimitive.Item.displayName;

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownSeparator.displayName = DropdownPrimitive.Separator.displayName;

export {
  Dropdown,
  DropdownGroup,
  DropdownValue,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownSeparator,
  DropdownScrollUpButton,
  DropdownScrollDownButton,
};
