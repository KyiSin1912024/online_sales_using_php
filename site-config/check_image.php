<?php

function checkImageExtension($file_name)
{
    $explode = explode('.', $file_name);
    $extension = strtolower(end($explode));
    $allow_extensions = ['jpg','jpeg','png','gif', 'webp'];
    if (in_array($extension, $allow_extensions)) {
        return true;
    } else {
        return false;
    }
}

function makeUniqueImageName($file_name)
{
    $date = date('YmdHis');
    $unique_name = $date.'_'.$file_name;
    return $unique_name;
}
