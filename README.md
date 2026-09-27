# Gladstone Shift Calendar

Prototype and future live scheduling application for Gladstone Fire Department.

## Current prototype
- 28-day A Shift view using the 24/48 rotation
- Station 1: BC, E1, M1
- Station 2: E2, M2
- M3 reserve / event view
- Green = filled duty day, red = open staffing need
- Clickable day detail panel
- Whole Schedule selector
- Kelly Month indicator

## Security
This repository is currently public. Do not commit credentials, API keys, production Supabase secrets, real personnel records, leave details, or other sensitive department data.

The production app will use server-enforced authorization, secure authentication, row-level security, audit logging, encrypted transport, and separate development/production environments.
