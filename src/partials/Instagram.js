import React from 'react';
import 'react-ig-feed/dist/index.css'
import InstagramFeed  from 'react-ig-feed'

const Instagram = () => {

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InstagramFeed token="IGQVJYYnY4U1NOaDZABbEp4c20xZA2hFUkFHNmFrcVRqREhVM1k1R3JlMFpFbTZAYUXJoM2IzYUozZAEVlQzZAIWE41NkhOa3BBTTlGVm5TRGlMcy11M2U5b0ZAmNktXTVhJRzVWb1R3QjNYeHZAaazRpajg0RwZDZD"  counter="6"/>
            </div>
        </section>
    )
}

export default Instagram
