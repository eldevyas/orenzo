import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Image from "next/image";
import Footer from "../../layout/footer";
import Card from "./imports/Card";
import Form from "./imports/Form";

export default function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="Background"></div>
            <Header />
            <div className="PageContent">
                <Card />
                <Form />
            </div>

            <Footer />
        </div>
    );
}
