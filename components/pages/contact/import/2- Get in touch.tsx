// import Select from "react-select";
import { DefaultButton } from "../../../core/buttons";
import { Properties } from "./Utils/FormProps";
import * as Yup from "yup";
import * as React from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
    useFormik,
} from "formik"; // import Creatable, { useCreatable } from "react-select/creatable";

export default function GetInTouch(props: Properties) {
    let Title = props.Title;
    let Description = props.Description;

    const InterestOptions = [
        {
            value: "Design",
            label: props.Form.Interest.Options.Design,
        },
        {
            value: "Development",
            label: props.Form.Interest.Options.Development,
        },
        {
            value: "Marketing",
            label: props.Form.Interest.Options.Marketing,
        },
        {
            value: "Other",
            label: props.Form.Interest.Options.Other,
        },
    ];

    const BudgetOptions = [
        {
            value: "-10,000 Dh",
            label: props.Form.Budget.Options["-1000"],
        },
        {
            value: "10,000 Dh - 50,000 Dh",
            label: props.Form.Budget.Options["1000-5000"],
        },
        {
            value: "50,000 Dh - 100,000 Dh",
            label: props.Form.Budget.Options["5000-10000"],
        },
        {
            value: "+100,000 Dh",
            label: props.Form.Budget.Options["+10000"],
        },
    ];

    const ElementsRef = React.useRef<HTMLFormElement>(null);
    const handleMouseMove = (e: any) => {
        if (ElementsRef != null) {
            const Elements: any = ElementsRef.current!.getElementsByClassName(
                "PageContent__GetInTouch__Form__Field__Container"
            );

            const ElementsRect = ElementsRef.current!.getBoundingClientRect();

            for (const Element of Elements) {
                const rect = Element.getBoundingClientRect();
                const x = e.clientX - rect.x;
                const y = e.clientY - rect.y;

                Element.style.setProperty("--mouse-x", `${x}px`);
                Element.style.setProperty("--mouse-y", `${y}px`);
            }
        }
    };

    const formik: any = useFormik({
        initialValues: {
            fullName: "",
            Number: "",
            email: "",
            interest: [],
            budget: [],
            message: "",
        },
        validationSchema: Yup.object().shape({
            fullName: Yup.string()
                .min(2, "Too Short!")
                .max(80, "Too Long!")
                .required("Required"),
            Number: Yup.string().required("Required"),
            email: Yup.string().email("Invalid Email").required("Required"),
            interest: Yup.string().required("Required"),
            budget: Yup.string().required("Required"),
            message: Yup.string().optional(),
        }),
        onSubmit: (values: {
            fullName: any;
            Number: any;
            email: any;
            interest: any;
            budget: any;
            message: any;
        }) => {
            alert(JSON.stringify(values, null, 2));
            axios
                .post(
                    "https://sheet.best/api/sheets/059df18e-304a-4cce-a8c2-f0dcf45e5b56",
                    {
                        "Full Name": values.fullName,
                        Number: values.Number,
                        Email: values.email,
                        Interest: values.interest,
                        Budget: values.budget,
                        Message: values.message,
                    }
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    });

    return (
        <div className="PageContent__GetInTouch">
            <div className="PageContent__GetInTouch__Heading TorchLightEffect">
                <div className="PageContent__GetInTouch__Heading__Title">
                    {Title}
                </div>
                <div className="PageContent__GetInTouch__Heading__Description">
                    {Description}
                </div>
            </div>

            <form
                className="PageContent__GetInTouch__Form"
                ref={ElementsRef}
                onMouseMove={handleMouseMove}
                onSubmit={formik.handleSubmit}
            >
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.Name.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <input
                            name="fullName"
                            type="text"
                            value={formik.values.fullName}
                            placeholder={props.Form.Name.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input"
                            onChange={formik.handleChange}
                            onFocus={(e: {
                                target: {
                                    classList: {
                                        add: (arg0: string) => void;
                                    };
                                };
                            }) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e: {
                                target: {
                                    classList: {
                                        remove: (arg0: string) => void;
                                    };
                                };
                            }) => {
                                e.target.classList.remove("Focused");
                                formik.handleBlur;
                            }}
                        />
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Error">
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <div>{formik.errors.fullName}</div>
                        ) : null}
                    </div>
                </div>
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.PhoneNumber.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <input
                            name="Number"
                            type="tel"
                            value={formik.values.Number}
                            placeholder={props.Form.PhoneNumber.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input"
                            onChange={formik.handleChange}
                            onFocus={(e: {
                                target: {
                                    classList: {
                                        add: (arg0: string) => void;
                                    };
                                };
                            }) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e: {
                                target: {
                                    classList: {
                                        remove: (arg0: string) => void;
                                    };
                                };
                            }) => {
                                e.target.classList.remove("Focused");
                                formik.handleBlur;
                            }}
                        />
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Error">
                        {formik.touched.Number && formik.errors.Number ? (
                            <div>{formik.errors.Number}</div>
                        ) : null}
                    </div>
                </div>
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.Email.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <input
                            name="email"
                            type="email"
                            value={formik.values.email}
                            placeholder={props.Form.Email.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input"
                            onChange={formik.handleChange}
                            onFocus={(e: {
                                target: {
                                    classList: {
                                        add: (arg0: string) => void;
                                    };
                                };
                            }) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e: {
                                target: {
                                    classList: {
                                        remove: (arg0: string) => void;
                                    };
                                };
                            }) => {
                                e.target.classList.remove("Focused");
                                formik.handleBlur;
                            }}
                        />
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Error">
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>
                </div>
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.Interest.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <select
                            id="interest"
                            name="interest"
                            value={formik.values.interest}
                            placeholder={props.Form.Interest.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input"
                            onChange={formik.handleChange}
                            onFocus={(e: any) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e: any) => {
                                e.target.classList.remove("Focused");
                                formik.handleBlur;
                            }}
                        >
                            <option value={""} disabled>
                                {props.Form.Interest.Placeholder}
                            </option>
                            {InterestOptions.map((Option, Index) => (
                                <option value={Option.label} key={Index}>
                                    {Option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Error">
                        {formik.touched.interest && formik.errors.interest ? (
                            <div>{formik.errors.interest}</div>
                        ) : null}
                    </div>
                </div>
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.Budget.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <select
                            id="budget"
                            name="budget"
                            value={formik.values.budget}
                            placeholder={props.Form.Budget.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input"
                            onChange={formik.handleChange}
                            onFocus={(e: any) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e: any) => {
                                e.target.classList.remove("Focused");
                                formik.handleBlur;
                            }}
                        >
                            <option value={""} disabled>
                                {props.Form.Interest.Placeholder}
                            </option>
                            {BudgetOptions.map((Option, Index) => (
                                <option value={Option.label} key={Index}>
                                    {Option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Error">
                        {formik.touched.budget && formik.errors.budget ? (
                            <div>{formik.errors.budget}</div>
                        ) : null}
                    </div>
                </div>
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.Message.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <textarea
                            id="message"
                            name="message"
                            value={formik.values.message}
                            rows={6}
                            placeholder={props.Form.Message.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input"
                            onChange={formik.handleChange}
                            onFocus={(e: any) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e: any) => {
                                e.target.classList.remove("Focused");
                                formik.handleBlur;
                            }}
                        />
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Error">
                        {formik.touched.message && formik.errors.message ? (
                            <div>{formik.errors.message}</div>
                        ) : null}
                    </div>
                </div>
            </form>
            <div className="PageContent__GetInTouch__FormAction">
                <DefaultButton bgColor="Blue" onClick={formik.handleSubmit}>
                    {props.Form.Button}
                </DefaultButton>
            </div>
        </div>
    );
}
