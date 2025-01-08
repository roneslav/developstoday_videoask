export const generateStaticParams = (makeId, year) => {
  return `/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;
};
