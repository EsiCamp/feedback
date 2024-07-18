<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="nameRules"
            label="نام"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :counter="10"
            :rules="nameRules"
            label="نام خانوادگی"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="ایمیل"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const valid = ref(false);
const firstname = ref("");
const lastname = ref("");
const email = ref("");

const nameRules = [
  (value: string) => !!value || "نام الزامی است.",
  (value: string) =>
    !value || value.length <= 10 || "نام باید کمتر از ۱۰ کاراکتر باشد.",
];

const emailRules = [
  (value: string) => !!value || "ایمیل الزامی است.",
  (value: string) =>
    /.+@.+\..+/.test(value) || "لطفاً یک ایمیل معتبر وارد کنید.",
];
</script>
