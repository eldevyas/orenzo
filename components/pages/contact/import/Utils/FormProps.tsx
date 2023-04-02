interface Properties {
    showWhatsApp: boolean;
    showCalendly: boolean;
    showForm: boolean;
    Title: string;
    Description: string;
    Form: {
        Name: {
            Label: string;
            Placeholder: string;
        };
        PhoneNumber: {
            Label: string;
            Placeholder: string;
        };
        Email: {
            Label: string;
            Placeholder: string;
        };
        Interest: {
            Label: string;
            Placeholder: string;
            Options: {
                Design: string;
                Development: string;
                Marketing: string;
                Other: string;
            };
        };
        Budget: {
            Label: string;
            Placeholder: string;
            Options: {
                "-1000": string;
                "1000-5000": string;
                "5000-10000": string;
                "+10000": string;
            };
        };
        Message: {
            Label: string;
            Placeholder: string;
        };
        Button: string;
    };
    Modal: {
        Title: string;
        Subtitle: string;
    };
}

export type { Properties };
