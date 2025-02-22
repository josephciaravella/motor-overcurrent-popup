import { 
    Dialog,          
    DialogTitle,
    DialogContent,   
    DialogPortal,   
    DialogOverlay 
  } from '@radix-ui/react-dialog';
  import '../styles/PopupDialog.css';

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
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogPortal>
                    <DialogOverlay className="dialog-overlay" />
                    <DialogContent className="dialog-content">
                        <DialogTitle className="dialog-title">
                            🚨 FATAL WARNING 🚨
                        </DialogTitle>
                        <div className="dialog-message">
                            Overcurrent detected in {getDangerousMotors(overcurrents)}
                        </div>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </>
    )
}