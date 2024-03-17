import React from 'react';

export function Profil() {
    return (
        <div className="group relative rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "26rem" }}>
                <img
                    style={{ maxWidth: "100%", width: "19rem", height: "auto" }}
                    src="images/woman1.jpg"
                    alt="woman"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
