const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

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

app.use('/api', secteurRoutes);
app.use('/api', domaineRoutes);
app.use('/api', sdomaineRoutes);
app.use('/api', specialiteRoutes);
app.use('/api', blocCompetenceRoutes);
app.use('/api', competenceRoutes);

app.use('/api', ficheFormationRoutes);
app.use('/api', ficheBlocRoutes);
app.use('/api', ficheCompetenceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend démarré sur le port ${PORT}`);
});



