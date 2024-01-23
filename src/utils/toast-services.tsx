import { toast } from "react-toastify";

export class ToastServices {
    showErrorRequestMessage(error: any): void {
        try {
                setTimeout(() => {
                    toast.error(error.response.data.errors[0]);
                }, 20);
        } catch {
            toast.error(`Houve algum problema com a requisição`);
        }
    }
}
