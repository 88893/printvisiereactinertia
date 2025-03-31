<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Storage;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reviews = [
            [
                'title' => 'Philips',
                'description' => 'Drukwerk voor evenementen, en dan ook nog eens met innovatie als hoofdthema. Het complete drukwerkpakket voor dit jaarlijkse evenement komt uit onze drukkerij in Rotterdam.',
                'image_path' => 'img/icon/philips-logo.png',
            ],
            [
                'title' => 'Porsche',
                'description' => 'Binnenkort ook helemaal elektrisch. Daar zijn we als groene drukkerij blij mee! Natuurlijk ook met het feit dat Printvisie het drukwerk voor dit mooie merk mag verzorgen.',
                'image_path' => 'img/icon/porsche-logo.png',
            ],
            [
                'title' => 'Dudok',
                'description' => 'Een appeltaartje van Dudok, wie kent het niet. Maar ook voor een lunch of diner kan je bij Dudok terecht. Voor alle vestigingen drukt Printvisie de menukaarten.',
                'image_path' => 'img/icon/dudok-logo.jpg',
            ],
            [
                'title' => 'Ahoy Rotterdam',
                'description' => 'Rotterdams mooiste bedrijf drukt natuurlijk bij de Rotterdamse drukker. Of het nu om spoed drukwerk gaat of om brochures voor Ahoy\'s eigen producties.',
                'image_path' => 'img/icon/ahoy-rotterdam-logo.jpg',
            ],
            [
                'title' => 'Prinses Beatrix Spierfonds',
                'description' => 'Ieder jaar komt de collectant langs voor uw bijdrage. Drukwerk in full colour, PMS kleuren, offset- en digitaal druk, maar vooral de logistiek. Printvisie is la jaren de vaste partner.',
                'image_path' => 'img/icon/prinses-beatrix-spierfonds-logo.jpg',
            ],
            [
                'title' => 'RVKO',
                'description' => 'De grootste scholengemeenschap in het primaire onderwijs van Nederland met 2200 medewerkers en en 21.000 leerlingen. Daar kan natuurlijk alleen maar duurzaam voor gedrukt worden.',
                'image_path' => 'img/icon/rvko-logo.jpg',
            ],
            [
                'title' => 'Numatic',
                'description' => 'Een van de oudste duurzame klanten van Printvisie. Drukt vanaf het eerste uur op Printvisie Greenlabel papier. Misschien zegt de naam Numatic je niet veel, maar hun stofzuigers Henry en Hetty zijn zeker wel bekend.',
                'image_path' => 'img/icon/numatic-logo.jpg',
            ],
            [
                'title' => 'Hilton',
                'description' => 'Met meerdere vestigingen in Nederland leveren kwaliteitsdrukwerk voor deze luxe hotelketen.',
                'image_path' => 'img/icon/hilton-logo.jpg',
            ],
            [
                'title' => 'Dyade',
                'description' => 'Alle leraren en schooldirecteuren uit het primair onderwijs hebben ooit te maken met Dyade. Bij de Dyade Academy kan deze groep worden bijgeschoold.',
                'image_path' => 'img/icon/dyade-logo.jpg',
            ],
        ];

        $publicPath = public_path('img/icon');
        if (!file_exists($publicPath)) {
            // Create directories if they don't exist
            mkdir($publicPath, 0755, true);
        }

        foreach ($reviews as $review) {
            Review::create([
                'title' => $review['title'],
                'description' => $review['description'],
                'image_path' => $review['image_path'],
            ]);
        }
    }
}