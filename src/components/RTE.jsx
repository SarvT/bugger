import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import {Controller} from "react-hook-form";

export default function RTE() {
  return (
    <Editor
      initialValue="default"
      init={{
        branding: false,
        menubar: false,
        height: 500,
        plugins: [
          "image",
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
          "anchor",
        ],
        toolbar:
          "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    ></Editor>
  );
}
