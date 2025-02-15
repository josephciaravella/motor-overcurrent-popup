import { 
    Dialog,          
    DialogContent,   
    DialogPortal,    
  } from '@radix-ui/react-dialog';

interface PopupDialogProps {
    overcurrents: {
        id: number;
        name: string;
        isOvercurrent: boolean;
    }[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function PopupDialog({ overcurrents, open, onOpenChange }: PopupDialogProps) {

    function getDangerousMotors(motors: Array<{ id: number; name: string; isOvercurrent: boolean }>): String {
        return motors
            .filter(motor => motor.isOvercurrent)
            .map(motor => motor.name)
            .join(", ");
    }

    return (
        <>
            <Dialog title="🚨FATAL WARNING🚨" open={open} onOpenChange={onOpenChange}>
                <DialogPortal>
                    <DialogContent>
                        Overcurrent detected in {getDangerousMotors(overcurrents)}
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </>
    )
}