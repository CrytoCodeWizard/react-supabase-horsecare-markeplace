import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

const LandingPage: React.FC = () => {
    const [bookings, setBookings] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const bookingsData = await supabase.from('bookings').select('*');
            const usersData = await supabase.from('users').select('*');
            const servicesData = await supabase.from('services').select('*');

            console.log("user service :", usersData.data, servicesData.data);

            if (bookingsData.data && usersData.data && servicesData.data) {
                const combinedData = bookingsData.data.map(booking => {
                    return {
                        ...booking,
                        user: usersData.data.find(user => user.id === booking.user_id)?.name,
                        service: servicesData.data.find(service => service.id === booking.service_id)?.name,
                    };
                });

                setBookings(combinedData);
            }
        })();
    }, []);

    return (
        <div>
            <h1>Welcome to the Horsecare Marketplace</h1>
            <p>Find trusted professionals for all your horsecare needs.</p>
            
            {bookings.map((booking, index) => (
                <div key={booking.id}>
                    <p>Amount: {booking.amount}</p>
                    <p>Date: {booking.date}</p>
                </div>
            ))}
        </div>
    );
};

export default LandingPage;
