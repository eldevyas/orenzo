interface Properties {
    Title: string;
    Description: string;
    Form: {
        Name: {
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
}

export type { Properties };
