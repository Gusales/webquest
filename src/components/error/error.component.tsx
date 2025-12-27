import { IErrorMessage } from "@/src/shared/interfaces";
import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export interface IErrorContainerProps {
    error: IErrorMessage
}

export function ErrorContainer({ error: { title: errorTitle, description: errorDescription = "" } }: IErrorContainerProps) {
    return (
        <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>{errorTitle}</AlertTitle>
            {
                errorDescription.length > 0 && (
                    <AlertDescription>
                        <p>{errorDescription}</p>
                    </AlertDescription>
                )
            }
        </Alert>
    )
}