import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Image from "next/image";
import Footer from "../../layout/footer";
import Container from "./import/Container";

export default function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="Background"></div>
            <Header data-theme="light" />
            <div className="PageContent">
                <Container />
            </div>
            {/* <Footer /> */}
        </div>
    );
}
