# RNFC Backend API

Backend API for the RNFC (Référentiel National de Formation et Certification) training management system.

## Features

- RESTful API for managing training sectors, domains, specialties, and competencies
- MySQL database integration
- CORS enabled for cross-origin requests
- Security middleware with Helmet
- Request logging with Morgan
- Environment-based configuration

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure your database settings in the `.env` file

5. Start the server:
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Secteurs (Sectors)
- `GET /api/secteurs` - Get all sectors
- `GET /api/secteurs/:id` - Get sector by ID
- `POST /api/secteurs` - Create new sector
- `PUT /api/secteurs/:id` - Update sector
- `DELETE /api/secteurs/:id` - Delete sector

### Domaines (Domains)
- `GET /api/secteurs/:secteurId/domaines` - Get domains by sector
- `GET /api/domaines/:id` - Get domain by ID
- `POST /api/domaines` - Create new domain
- `PUT /api/domaines/:id` - Update domain
- `DELETE /api/domaines/:id` - Delete domain

### Sous-domaines (Sub-domains)
- `GET /api/domaines/:domaineId/sdomaines` - Get sub-domains by domain
- `GET /api/sdomaines/:id` - Get sub-domain by ID
- `POST /api/sdomaines` - Create new sub-domain
- `PUT /api/sdomaines/:id` - Update sub-domain
- `DELETE /api/sdomaines/:id` - Delete sub-domain

### Spécialités (Specialties)
- `GET /api/sdomaines/:sdomaineId/specialites` - Get specialties by sub-domain
- `GET /api/specialites/:id` - Get specialty by ID
- `POST /api/specialites` - Create new specialty
- `PUT /api/specialites/:id` - Update specialty
- `DELETE /api/specialites/:id` - Delete specialty

### Blocs de Compétences (Competency Blocks)
- `GET /api/specialites/:specialiteId/blocs` - Get blocks by specialty
- `GET /api/blocs/:id` - Get block by ID
- `POST /api/blocs` - Create new block
- `PUT /api/blocs/:id` - Update block
- `DELETE /api/blocs/:id` - Delete block

### Compétences (Competencies)
- `GET /api/blocs/:blocId/competences` - Get competencies by block
- `GET /api/competences/:id` - Get competency by ID
- `POST /api/competences` - Create new competency
- `PUT /api/competences/:id` - Update competency
- `DELETE /api/competences/:id` - Delete competency

### Fiches Formation (Training Forms)
- `GET /api/fiches` - Get all training forms
- `GET /api/fiches/formation/:id` - Get training form by ID
- `GET /api/fiches/specialite/:speId` - Get training form by specialty
- `POST /api/fiches` - Create new training form
- `PUT /api/fiches/:id` - Update training form
- `DELETE /api/fiches/:id` - Delete training form

### Fiches Bloc (Block Forms)
- `GET /api/fiches/blocs` - Get all block forms
- `GET /api/fiches/blocs/:id` - Get block form by ID
- `GET /api/fiches/bloc/:blocId` - Get block form by block
- `POST /api/fiches/blocs` - Create new block form
- `PUT /api/fiches/blocs/:id` - Update block form
- `DELETE /api/fiches/blocs/:id` - Delete block form

### Fiches Compétence (Competency Forms)
- `GET /api/fiches/competences` - Get all competency forms
- `GET /api/fiches/competences/:id` - Get competency form by ID
- `GET /api/fiches/competence/:compId` - Get competency form by competency
- `POST /api/fiches/competences` - Create new competency form
- `PUT /api/fiches/competences/:id` - Update competency form
- `DELETE /api/fiches/competences/:id` - Delete competency form

## Health Check

- `GET /health` - Server health status

## Environment Variables

- `DB_HOST` - Database host (default: localhost)
- `DB_USER` - Database username (default: root)
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name (default: referentiel)
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## Error Handling

The API returns consistent error responses in JSON format:

```json
{
  "error": "Error message"
}
```

HTTP status codes used:
- `200` - Success
- `201` - Created
- `404` - Not Found
- `500` - Internal Server Error

## Development

```bash
# Install development dependencies
npm install

# Run in development mode with auto-reload
npm run dev

# Run tests
npm test

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## License

MIT License