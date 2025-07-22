"use client"

import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  animationDelay?: number;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  animationDelay = 0,
}: FormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <label htmlFor={name} className="text-lg font-medium text-foreground">
        {label}
      </label>
      {type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={8}
          className="border-border/50 focus:border-primary resize-none text-base min-h-[200px]"
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="border-border/50 focus:border-primary h-12 text-base"
        />
      )}
    </motion.div>
  );
} 