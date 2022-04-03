import React from 'react';
import 'react-ig-feed/dist/index.css'
import InstagramFeed  from 'react-ig-feed'

const Instagram = () => {

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InstagramFeed token="IGQVJVaXVkQUVKVHFJcGZAkREE0U1dvenBHY2FZAcy11TmlUZAmJhZA2VXYWdSOHJUUDNWbF9mZAEJlRXhUUnJnZA1NSUnA2RjZAiYWRLSTlZAMHNFQXF6cG00YWg3Mmo4NFBMcmEweFRLZAFZAtWVdmR05XMWpYcAZDZD"  counter="6"/>
            </div>
        </section>
    )
}

export default Instagram
