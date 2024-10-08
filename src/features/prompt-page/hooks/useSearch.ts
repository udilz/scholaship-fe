import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { searchScholarship } from "../services/prompt.api";

export function useSearch() {
    const [formData, setFormData] = useState({
        country: '',
        degrees: '',
        major: '',
        funding_type: '',
      });
      const {
        data,
        mutate: hanldeSearchScholarship,
        isPending,
        isError,
      } = useMutation({
        mutationKey: ['resultSearch'],
        mutationFn: () => searchScholarship(formData),
        onSuccess: (data) => {
          console.log('Search results:', data); // Optional: log results
        },
      });

      return {data, hanldeSearchScholarship, isPending, isError, formData, setFormData}
}