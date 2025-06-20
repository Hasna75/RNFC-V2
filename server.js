const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
const secteurRoutes = require('./routes/secteurRoutes');
const domaineRoutes = require('./routes/domaineRoutes');
const sdomaineRoutes = require('./routes/sdomaineRoutes');
const specialiteRoutes = require('./routes/specialiteRoutes');
const blocCompetenceRoutes = require('./routes/blocCompetenceRoutes');
const competenceRoutes = require('./routes/competenceRoutes');
const ficheFormationRoutes = require('./routes/ficheFormationRoutes');
const ficheBlocRoutes = require('./routes/ficheBlocRoutes');
const ficheCompetenceRoutes = require('./routes/ficheCompetenceRoutes');

// API Routes
app.use('/api', secteurRoutes);
app.use('/api', domaineRoutes);
app.use('/api', sdomaineRoutes);
app.use('/api', specialiteRoutes);
app.use('/api', blocCompetenceRoutes);
app.use('/api', competenceRoutes);
app.use('/api', ficheFormationRoutes);
app.use('/api', ficheBlocRoutes);
app.use('/api', ficheCompetenceRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Erreur interne du serveur',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend démarré sur le port ${PORT}`);
  console.log(`📊 Health check disponible sur http://localhost:${PORT}/health`);
});

module.exports = app;