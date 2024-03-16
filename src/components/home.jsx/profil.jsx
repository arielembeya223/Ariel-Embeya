import React from 'react';

export function Profil() {
    return (
        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "26rem" }}>
                    <img
                        className="mx-auto max-h-full w-auto object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        src="images/woman1.jpg"
                        alt="woman"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
