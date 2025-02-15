import { useState } from "react"
import PopupDialog from "./PopupDialog.tsx"

export default function Popup() {

    const idToMotorDict: { [key: number]: string } = {
        0: "motor1",
        1: "motor2"
    }

    const [isOpen, setIsOpen] = useState(false)
    
    const [overcurrents, setOvercurrents] = useState([  
        { id: 0, name: 'motor1', isOvercurrent: false },
        { id: 1, name: 'motor2', isOvercurrent: false },
    ])

    function generateOvercurrent() {
        const newCurrents: { id: number, name: string, isOvercurrent: boolean }[] = []

        for (let i=0; i<2; i++) {
            const current = (Math.floor(Math.random() * 11)) >= 8;
            newCurrents.push({ id: i, name: idToMotorDict[i], isOvercurrent: current });
        }

        setOvercurrents(newCurrents)
        setIsOpen(newCurrents.some(motor => motor.isOvercurrent))
    }


    return (
        <div>
            <button onClick={generateOvercurrent}>
                Generate overcurrent value  
            </button>
            <PopupDialog
                overcurrents={overcurrents}
                open={isOpen}
                onOpenChange={setIsOpen}
            />
        </div>
    )
}