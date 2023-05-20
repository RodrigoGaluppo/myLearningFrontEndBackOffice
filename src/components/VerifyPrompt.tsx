import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react";
import { useRef } from "react";



const VerifyPrompt = ({isOpen,onOpen,onClose,OnClickedYes}:
    {isOpen:boolean; onOpen:()=>void, onClose:()=>void, OnClickedYes:()=>void}
    )=>{

        const btnRef = useRef<HTMLButtonElement>(null)

    return (
        <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={btnRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader> Delete Item?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this item?
            (All items related to this one will be deleted as well)
            `
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={btnRef} onClick={onClose}>
              No
            </Button>
            <Button onClick={()=>{
              OnClickedYes()
              onClose()
            }} colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}

export default VerifyPrompt