import { useEffect } from "react";
import { ModalContent, SuccessModalLayout } from "./SuccessModal.styled";

export default function SuccessModal({ onClose }: { onClose: () => void }) {
  ///// ************ წარმატებული გამოწერისას მოდალის 3 წამით ამონათება ****************** /////
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <SuccessModalLayout>
      <ModalContent>✅ Subscribed successfully!</ModalContent>
    </SuccessModalLayout>
  );
}
