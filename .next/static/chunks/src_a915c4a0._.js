(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/music_courses.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"courses\":[{\"id\":1,\"title\":\"Guitar Fundamentals\",\"slug\":\"guitar-fundamentals\",\"description\":\"Learn the basics of playing guitar with our comprehensive beginner's course.\",\"price\":99.99,\"instructor\":\"John Doe\",\"isFeatured\":true,\"image\":\"/courses/guitar.jpg\"},{\"id\":2,\"title\":\"Piano for Beginners\",\"slug\":\"piano-for-beginners\",\"description\":\"Start your musical journey with foundational piano skills taught by expert instructors.\",\"price\":109.99,\"instructor\":\"Jane Smith\",\"isFeatured\":false,\"image\":\"/courses/piano.jpg\"},{\"id\":3,\"title\":\"Advanced Vocal Techniques\",\"slug\":\"advanced-vocal-techniques\",\"description\":\"Enhance your singing with advanced vocal techniques for intermediate to advanced learners.\",\"price\":119.99,\"instructor\":\"Emily Johnson\",\"isFeatured\":true,\"image\":\"/courses/vocalist.jpg\"},{\"id\":4,\"title\":\"Drumming Mastery\",\"slug\":\"drumming-mastery\",\"description\":\"Master the drums with our comprehensive course covering all skill levels.\",\"price\":129.99,\"instructor\":\"Mike Brown\",\"isFeatured\":false,\"image\":\"/courses/drumming.jpg\"},{\"id\":5,\"title\":\"Jazz Improvisation\",\"slug\":\"jazz-improvisation\",\"description\":\"Learn the art of jazz improvisation with this course designed for all levels.\",\"price\":139.99,\"instructor\":\"Chris Davis\",\"isFeatured\":true,\"image\":\"/courses/jazz.jpg\"},{\"id\":6,\"title\":\"Music Production Fundamentals\",\"slug\":\"music-production-fundamentals\",\"description\":\"Dive into music production with this introductory course on the basics of sound engineering and mixing.\",\"price\":149.99,\"instructor\":\"Alex Wilson\",\"isFeatured\":true,\"image\":\"/courses/music-prod.jpg\"},{\"id\":7,\"title\":\"Songwriting Essentials\",\"slug\":\"songwriting-essentials\",\"description\":\"Learn the essentials of songwriting to express your musical creativity.\",\"price\":159.99,\"instructor\":\"Samantha Miller\",\"isFeatured\":false,\"image\":\"/courses/song-writing.jpg\"},{\"id\":8,\"title\":\"Electronic Music Production\",\"slug\":\"electronic-music-production\",\"description\":\"Create compelling electronic music with our course designed for beginners to advanced users.\",\"price\":169.99,\"instructor\":\"Luke Harris\",\"isFeatured\":true,\"image\":\"/courses/music-prod.jpg\"},{\"id\":9,\"title\":\"Classical Music History\",\"slug\":\"classical-music-history\",\"description\":\"Explore the rich history of classical music from its origins to the present day.\",\"price\":179.99,\"instructor\":\"Grace Lee\",\"isFeatured\":false,\"image\":\"/courses/classical-music.jpg\"},{\"id\":10,\"title\":\"Blues Guitar Techniques\",\"slug\":\"blues-guitar-techniques\",\"description\":\"Discover the techniques of blues guitar to add soul and depth to your playing.\",\"price\":189.99,\"instructor\":\"Ethan Moore\",\"isFeatured\":true,\"image\":\"/courses/blues.jpg\"}]}"));}),
"[project]/src/components/ui/background-gradient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BackgroundGradient": ()=>BackgroundGradient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
const BackgroundGradient = (param)=>{
    let { children, className, containerClassName, animate = true } = param;
    const variants = {
        initial: {
            backgroundPosition: "0 50%"
        },
        animate: {
            backgroundPosition: [
                "0, 50%",
                "100% 50%",
                "0 50%"
            ]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative p-[4px] group", containerClassName),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: animate ? variants : undefined,
                initial: animate ? "initial" : undefined,
                animate: animate ? "animate" : undefined,
                transition: animate ? {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                } : undefined,
                style: {
                    backgroundSize: animate ? "400% 400%" : undefined
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform", " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/background-gradient.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: animate ? variants : undefined,
                initial: animate ? "initial" : undefined,
                animate: animate ? "animate" : undefined,
                transition: animate ? {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                } : undefined,
                style: {
                    backgroundSize: animate ? "400% 400%" : undefined
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 rounded-3xl z-[1] will-change-transform", "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/background-gradient.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10", className),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/background-gradient.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/background-gradient.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BackgroundGradient;
var _c;
__turbopack_context__.k.register(_c, "BackgroundGradient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/FeatureCourses.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$music_courses$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/music_courses.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$background$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/background-gradient.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const FeatureCourses = ()=>{
    let featuredCourses = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$music_courses$2e$json__$28$json$29$__["default"].courses.filter((course)=>course.isFeatured);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-12  bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base text-teal-600 font-semibold tracking-wide uppercase",
                        children: "FEATURED COURSES"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeatureCourses.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl",
                        children: "Learn With the Best"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeatureCourses.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeatureCourses.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-11 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "feature-maincontainer",
                    className: "grid sm:px-3 lg:grid-cols-3 sm:grid-cols-2 gap-7 justify-center",
                    children: featuredCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$background$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundGradient"], {
                                className: "flex flex-col  rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 gap-3.5 sm:p-6 flex flex-col items-center text-center flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200",
                                            children: course.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeatureCourses.tsx",
                                            lineNumber: 38,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-neutral-600 dark:text-neutral-400 flex-grow",
                                            children: course.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeatureCourses.tsx",
                                            lineNumber: 42,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "bg-white px-2 py-1 text-gray-700 rounded-lg text-base",
                                            href: "/courses/".concat(course.slug),
                                            children: "Learn More"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeatureCourses.tsx",
                                            lineNumber: 44,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FeatureCourses.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeatureCourses.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, course.id, false, {
                            fileName: "[project]/src/components/FeatureCourses.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/FeatureCourses.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FeatureCourses.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/courses",
                    className: "py-4.5 z-19 px-6 text-sm rounded-md border border-solid border-gray-200 text-gray-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-300 hover:text-gray-800",
                    children: "View All courses"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeatureCourses.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FeatureCourses.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeatureCourses.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FeatureCourses;
const __TURBOPACK__default__export__ = FeatureCourses;
var _c;
__turbopack_context__.k.register(_c, "FeatureCourses");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a915c4a0._.js.map