import { Dialog, Portal, Button, CloseButton } from "@chakra-ui/react";

interface ConfirmDialogProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  confirmLabel?: string;
  variant?: "default" | "danger";
  onConfirm?: () => void;
}

/**
 * Reusable confirmation dialog (Chakra Dialog, styled with Tailwind
 * classes via className). Used for actions with real consequences —
 * checkout & settle, approve/reject an expense, send an order to
 * the kitchen — where a stray tap shouldn't fire the action.
 */
export default function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel = "Confirm",
  variant = "default",
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <Dialog.Root role="alertdialog" placement="center">
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className="bg-black/40" />
        <Dialog.Positioner>
          <Dialog.Content className="bg-white rounded-card max-w-sm w-full p-6 shadow-xl">
            <Dialog.Header className="p-0 mb-2">
              <Dialog.Title className="font-display text-lg font-semibold text-textDark">
                {title}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body className="p-0 mb-6">
              <p className="text-[13.5px] text-textMute leading-relaxed">{description}</p>
            </Dialog.Body>
            <Dialog.Footer className="p-0 flex justify-end gap-2.5">
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  className="border! border-line! rounded-md! text-[12.5px]! font-semibold! px-4! py-2! text-textDark! bg-white! hover:bg-sand"
                >
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button
                  onClick={onConfirm}
                  className={`!rounded-md !text-[12.5px] !font-semibold !px-4 !py-2 ${
                    variant === "danger"
                      ? "!bg-clay !text-white hover:!opacity-90"
                      : "!bg-brass !text-[#241704] hover:!bg-brassLight"
                  }`}
                >
                  {confirmLabel}
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" className="!absolute !top-3 !right-3" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
