import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root defaultOpen={isOpen} open={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 h-full max-h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-md border border-neutral-700 bg-neutral-800 p-6 drop-shadow-md focus:outline-none md:h-auto md:max-h-[85dvh] md:w-[90vw] md:max-w-md">
          <Dialog.Title className="mb-4 text-center text-xl font-bold">
            {title}
          </Dialog.Title>
          <Dialog.Description className="test-sm mb-5 text-center leading-normal">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="absolute right-2.5 top-2.5 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-neutral-400 hover:text-white focus:outline-none">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Modal;
