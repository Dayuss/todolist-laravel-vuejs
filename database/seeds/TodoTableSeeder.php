<?php

use Illuminate\Database\Seeder;
use App\Todo;

class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i=0;$i<5;$i++){
            Todo::create([
                'name'=> 'Belajar vue'.$i,
                'note'=>'belajar vue dan laravel'.$i,
                'due_date'=>'2019-05-14',
                'status'=>false
            ]);
        }

    }
}
