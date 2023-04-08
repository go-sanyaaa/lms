<?php

namespace App\Exports;

use App\Models\Homework;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;

class HomeworksExport implements FromCollection
{
    use Exportable;

    /**
     * @return Collection
     */
    public function collection()
    {
        return
            collect([[
                'ID Студента', 'ФИО', 'Номер ДЗ', 'Статус', 'Оценка', 'Дата обновления статуса'
            ]])->concat(
                Homework::query()
                    ->with(['user', 'status'])
                    ->chunkMap(fn(Homework $homework) => [
                        $homework->user_id,
                        ($homework->user->surname ?? '') . ' ' . ($homework->user->name ?? '') . ' ' . ($homework->user->patronymic ?? ''),
                        $homework->lesson_id,
                        $homework->status->title,
                        $homework->grade,
                        $homework->updated_at
                    ], 100)
                    ->toArray()
            );
    }
}
