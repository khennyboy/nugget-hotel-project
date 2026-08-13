import { Dialog, Portal, Button, CloseButton } from "@chakra-ui/react";

interface FormDialogProps {
  trigger: React.ReactNode;
  title: string;
  fields: { label: string; placeholder: string }[];
  submitLabel?: string;
  onSubmit?: () => void;
}

/**
 * Reusable form-in-a-dialog (Chakra Dialog for the overlay/focus-trap
 * behavior, Tailwind for every visual detail). Used for "+ New booking"
 * and "+ New departure" — anything that's a short create-form triggered
 * from a button, where a full page navigation would be overkill.
 */
export default function FormDialog({ trigger, title, fields, submitLabel = "Save", onSubmit }: FormDialogProps) {
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className="bg-black/40" />
        <Dialog.Positioner>
          <Dialog.Content className="bg-white rounded-card max-w-md w-full p-6 shadow-xl relative">
            <Dialog.Header className="p-0 mb-5">
              <Dialog.Title className="font-display text-lg font-semibold text-textDark">
                {title}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body className="p-0 mb-6 flex flex-col gap-3">
              {fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-semibold text-textDark mb-1.5">{field.label}</label>
                  <input
                    className="w-full border border-line rounded-lg px-3.5 py-2.5 text-[13.5px] bg-white focus:outline-none focus:border-brass"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </Dialog.Body>
            <Dialog.Footer className="p-0 flex justify-end gap-2.5">
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  className="!border !border-line !rounded-md !text-[12.5px] !font-semibold !px-4 !py-2 !text-textDark !bg-white hover:!bg-sand"
                >
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button
                  onClick={onSubmit}
                  className="!bg-brass !text-[#241704] !rounded-md !text-[12.5px] !font-semibold !px-4 !py-2 hover:!bg-brassLight"
                >
                  {submitLabel}
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
