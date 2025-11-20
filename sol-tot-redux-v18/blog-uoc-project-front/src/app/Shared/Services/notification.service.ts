import { Injectable, signal } from "@angular/core";

export interface Feedback {
    type: 'success' | 'fail' | 'info';
    message: string
}

@Injectable({
    providedIn: 'root'
})

export class FeedbackService {
    private feedbackSignal = signal<Feedback | null>(null);

    readonly feedback = this.feedbackSignal.asReadonly();

    showSuccess(message: string): void {
        this.feedbackSignal.set({ type: 'success', message });
        setTimeout(() => this.clear(), 3000);
    }

    showFail(message: string): void {
        this.feedbackSignal.set({ type: 'fail', message });
        setTimeout(() => this.clear(), 3000);
    }

    showInfo(message: string): void {
        this.feedbackSignal.set({ type: 'info', message });
        setTimeout(() => this.clear(), 3000);
    }

    clear(): void {
        this.feedbackSignal.set(null);
    }
}