import Person from './Person'
import Experience from './Experience'
import School from './School'

const clement = new Person('Clément SAUVAGE', 'Lille', 30);

clement.addSchools(
    new School('Lycée Faidherbe', 'Lille', '2009', 'Prépa MPSI'),
    new School('Harvard University', 'Cambridge, MA', '2010', 'Bsc. Applied Mathematics'),
    new School('UTC', 'Compiegne', '2012', 'Ingénierie logicielle'),
)

clement.addExperiences(
    new Experience('London', 'Facebook Inc.', 'Software Engineer', 'Helped with React', 2011, 2014),
    new Experience('Cupertino', 'Apple Inc.', 'Senior Software Engineer', 'iOS Core Engineer', 2014, 2015),
    new Experience('Paris', 'LesTontonsLivreurs.com', 'CTO', 'Made everything tech', 2015, 2017),
    new Experience('Lille', 'BnC Consulting', 'CEO', 'Consulting', 2017),
)

clement.printResume()