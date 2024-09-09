"use client";

import { useEffect } from "react";

export default function(){
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
    })
}