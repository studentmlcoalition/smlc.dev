import React from 'react';
import 'react-ig-feed/dist/index.css'
import InstagramFeed  from 'react-ig-feed'

const Instagram = () => {

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InstagramFeed token="IGQVJXdGQxdzBzMGN1TnFmSDhwVjRNOU44NkZAtYmxnU3pnWVBWUkhhWHRCNnFibHM5UGNUa0lYVGhSbjhRSE5VZAW82Y2l2d1A4dTlmTlNhOWZANaklaTWJpMDNrcHMwV3NuYjBSVm1fQjhtcmp3MG5hWgZDZD"  counter="6"/>
            </div>
        </section>
    )
}

export default Instagram
