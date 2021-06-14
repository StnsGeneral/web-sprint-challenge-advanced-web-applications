import { axiosWithAuth } from '../helpers/axiosWithAuth';

export const editColorService = (color) => {
  const editColor = { color: `${color.color}`, code: { hex: `${color.hex}` } };
  return axiosWithAuth()
    .put(`/colors/${color.id}`, editColor)
    .then((res) => res)
    .catch((err) => err);
};

export const deleteColorService = (color) => {
  return axiosWithAuth()
    .delete(`/colors/${color.id}`)
    .then((res) => res)
    .catch((err) => err);
};
