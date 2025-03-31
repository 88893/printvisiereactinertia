<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateTestUser extends Command
{
    protected $signature = 'make:test-user';
    protected $description = 'Create a test user for development';

    public function handle()
    {
        $email = $this->ask('What email should the test user have?', 'test@example.com');
        $password = $this->secret('What password should the test user have?');
        
        if (empty($password)) {
            $password = 'password';
            $this->info("Using default password: 'password'");
        }
        

        $existingUser = User::where('email', $email)->first();
        
        if ($existingUser) {
            if ($this->confirm("A user with email {$email} already exists. Do you want to update their password?")) {
                $existingUser->update([
                    'password' => Hash::make($password),
                ]);
                $this->info("User password updated successfully.");
            } else {
                $this->info("Operation cancelled.");
            }
            return;
        }
        
        
        User::create([
            'name' => 'Test User',
            'email' => $email,
            'password' => Hash::make($password),
        ]);
        
        $this->info("Test user created successfully with email: {$email}");
    }
}