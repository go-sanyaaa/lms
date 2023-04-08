<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMediaRequest;
use App\Http\Resources\MediaUploadResource;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Plank\Mediable\Exceptions\MediaUpload\ConfigurationException;
use Plank\Mediable\Exceptions\MediaUpload\FileExistsException;
use Plank\Mediable\Exceptions\MediaUpload\FileNotFoundException;
use Plank\Mediable\Exceptions\MediaUpload\FileNotSupportedException;
use Plank\Mediable\Exceptions\MediaUpload\FileSizeException;
use Plank\Mediable\Facades\MediaUploader;

class MediaController extends Controller
{
    /**
     * @param  StoreMediaRequest  $request
     * @return MediaUploadResource
     * @throws ConfigurationException
     * @throws FileExistsException
     * @throws FileNotFoundException
     * @throws FileNotSupportedException
     * @throws FileSizeException
     */
    public function store(StoreMediaRequest $request): MediaUploadResource
    {
        /** @var UploadedFile $file */
        $file = $request->file('file');

        $filename = $request->get('filename', $file->getClientOriginalName());

        $media = MediaUploader::fromSource($file)
            ->toDirectory(Str::random(20),)
            ->useFilename($request->get('filename', '') ?? '')
            ->upload();

        $media->variant_name = $filename;
        $media->save();

        return MediaUploadResource::make($media);
    }
}
