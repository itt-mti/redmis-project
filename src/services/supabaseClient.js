import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  headers: { "Access-Control-Allow-Origin": "*" },
  mode: 'cors',
});

export const supabaseInsertEntidadAsync = async (values) => {
  return await supabase.from("redmis_entidad").insert([values]);
};

export const supabaseReadEntidadAsync = async (values) => {
  return await supabase.from("redmis_entidad").select("*");
};

export const supabaseUploadFileAsync = async (fileName, file, fileType) => {
  const result = await supabase.storage.from(fileType).upload(fileName, file);
  console.log({ file, fileName, fileType, result });
};

export const supabaseDownloadFileAsync = async (
  path,
  fileType,
  setAvatarUrl
) => {
  try {
    const { data, error } = await supabase.storage
      .from(fileType)
      .download(path);
    if (error) {
      throw error;
    }
    const url = URL.createObjectURL(data);
    setAvatarUrl(url);
  } catch (error) {
    console.log("Error downloading image: ", error.message);
  }
};
