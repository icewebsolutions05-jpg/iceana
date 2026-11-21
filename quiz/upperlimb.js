/* Upper limb quiz: loaded on demand by index.html */
(function(){
var st=document.createElement("style");st.textContent=".ql{--card:#fff;--bd:#dfe4ee;--pin:#eef2f8;--ok:#1f7a45;--okb:#e3f4ea;--no:#b3261e;--nob:#fbe8e6;--bone:#efe6d2;--ac:var(--brand);max-width:760px;margin:0 auto}\n:root[data-theme=dark] .ql{--card:#182033;--bd:#2c3a56;--pin:#222d45;--ok:#6fd49a;--okb:#16301f;--no:#f2998f;--nob:#3a1b18;--bone:#3a3629;--ac:#6cc3ff}\n.ql button{font:inherit}\n.ql .tabs{display:flex;gap:8px;margin:0 0 10px;position:sticky;top:calc(var(--nav-top) + var(--nav-h) + 6px);background:var(--bg);padding:6px 0;z-index:5}\n.ql .tabs button,.ql .tools button{flex:1;padding:10px;border:1px solid var(--bd);background:var(--card);color:var(--tx);border-radius:10px;font-size:.95rem;cursor:pointer}\n.ql .tabs button.on{background:var(--brand);color:#fff;border-color:var(--brand)}\n.ql .tools{display:flex;gap:8px;margin-bottom:10px}\n.ql .score{font-size:.88rem;color:var(--mu);margin:0 0 10px}\n.ql .card{background:var(--card);border:1px solid var(--bd);border-radius:14px;padding:14px;margin:0 0 14px}\n.ql .topic{display:inline-block;font-size:.72rem;color:var(--mu);border:1px solid var(--bd);border-radius:20px;padding:1px 8px;margin-bottom:6px}\n.ql .q{font-weight:600;margin:2px 0 10px}\n.ql .opt{display:block;width:100%;text-align:left;padding:10px 12px;margin:6px 0;border:1px solid var(--bd);border-radius:10px;background:var(--card);color:var(--tx);font-size:.95rem;cursor:pointer}\n.ql .opt:hover{border-color:var(--ac)}\n.ql .opt.ok{background:var(--okb);border-color:var(--ok)}\n.ql .opt.no{background:var(--nob);border-color:var(--no)}\n.ql .opt.lock{cursor:default}\n.ql .exp{margin-top:8px;font-size:.88rem;color:var(--mu)}\n.ql h3{margin:0 0 2px;font-size:1.05rem}\n.ql .sub{color:var(--mu);font-size:.86rem;margin:2px 0 8px}\n.ql svg{width:100%;height:auto;display:block;margin:8px 0}\n.ql svg .shape{fill:var(--bone);stroke:var(--mu);stroke-width:1.5}\n.ql svg .ln{stroke:var(--mu);stroke-width:1.5;fill:none}\n.ql svg .fat{fill:none;stroke:var(--bone);stroke-linecap:round}\n.ql svg .fatb{fill:none;stroke:var(--mu);stroke-linecap:round}\n.ql svg .pin{cursor:pointer}\n.ql svg .pin line{stroke:var(--ac)}\n.ql svg .pin circle{fill:var(--ac)}\n.ql svg .pin rect{fill:var(--card);stroke:var(--ac)}\n.ql svg .pin text{fill:var(--tx);font-weight:700;pointer-events:none}\n.ql svg .pin.act rect{fill:var(--pin);stroke-dasharray:6 3}\n.ql svg .pin.ok rect{fill:var(--okb);stroke:var(--ok)}\n.ql svg .pin.ok line{stroke:var(--ok)}.ql svg .pin.ok circle{fill:var(--ok)}\n.ql svg .pin.no rect{fill:var(--nob);stroke:var(--no)}\n.ql svg .pin.no line{stroke:var(--no)}.ql svg .pin.no circle{fill:var(--no)}\n.ql .skipbox{fill:var(--pin);stroke:var(--bd)}.ql .skiptxt{fill:var(--mu);font-weight:700}\n.ql .panel{min-height:48px;border:1px dashed var(--bd);border-radius:10px;padding:8px 10px;font-size:.92rem;color:var(--mu)}\n.ql .panel b{color:var(--tx)}\n.ql .prog{font-size:.82rem;color:var(--mu);margin-top:6px}\n.ql .hide{display:none}";st.textContent+="\n.ql{-webkit-tap-highlight-color:transparent}\n.ql button{touch-action:manipulation}\n.ql .hd{position:sticky;top:calc(var(--nav-top) + var(--nav-h) + 6px);background:var(--bg);padding:6px 0 4px;z-index:5;margin-bottom:8px}\n.ql .tabs{position:static;padding:0;margin:0 0 6px}\n.ql .score{margin:0 0 5px;font-size:.8rem}\n.ql .bar{height:4px;border-radius:4px;background:var(--bd);overflow:hidden}\n.ql .bar i{display:block;height:100%;width:0;background:var(--brand);transition:width .3s}\n.ql .opt{min-height:44px}\n.ql .tabs button,.ql .tools button{min-height:44px}\n.page{padding-bottom:calc(48px + env(safe-area-inset-bottom))}\n.ql .side{position:sticky;bottom:calc(8px + env(safe-area-inset-bottom));z-index:3}\n.ql .side .panel{background:var(--card);max-height:46vh;overflow:auto;box-shadow:0 -6px 18px rgba(0,0,0,.14)}\n.ql .side .prog{background:var(--card)}\n@media (max-width:899px){.ql .side .panel{max-height:36vh;padding:6px 8px}.ql .side .opt{min-height:38px;padding:6px 10px;margin:3px 0;font-size:.88rem}.ql .side .exp{margin-top:4px}}\n@media (min-width:900px){\n .ql{max-width:1120px}\n .ql .card.mq{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);column-gap:28px;align-items:start;padding:18px 20px}\n .ql .card.mq .qh{position:sticky;top:calc(var(--nav-top) + var(--nav-h) + 90px)}\n .ql .card.mq .q{font-size:1.08rem}\n .ql .card.mq .os .opt:first-child{margin-top:0}\n .ql .card.mq .exp{grid-column:1/-1}\n .ql .card.lc{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(300px,1fr);column-gap:22px;align-items:start}\n .ql .card.lc>h3,.ql .card.lc>.zr{grid-column:1/-1}\n .ql .card.lc>.sv{grid-column:1;grid-row:3}\n .ql .card.lc>.side{grid-column:2;grid-row:3;top:calc(var(--nav-top) + var(--nav-h) + 90px);bottom:auto;align-self:start}\n .ql .side .panel{max-height:none;box-shadow:none;min-height:200px}\n}\n@media (min-width:1400px){.ql{max-width:1240px}}\n";st.textContent+="\n.ql .tools{flex-wrap:wrap}\n.ql .tools select{flex:2 1 150px;min-height:44px;padding:0 10px;border:1px solid var(--bd);background:var(--card);color:var(--tx);border-radius:10px;font:inherit;font-size:.95rem}\n.ql .tools button{flex:1 1 120px}\n.ql .zr{display:flex;align-items:center;gap:10px;justify-content:space-between}\n.ql .zr .sub{margin:2px 0 8px}\n.ql .zb{flex:none;padding:6px 14px;border:1px solid var(--bd);background:var(--card);color:var(--tx);border-radius:20px;font-size:.85rem;cursor:pointer;min-height:36px}\n.ql .sv{overflow:auto;border-radius:8px}\n.ql .sv svg{margin:0}\n.ql .sv.z svg{width:220%;max-width:none}\n.ql .card.mq.cur{outline:2px solid var(--brand);outline-offset:2px}\n.ql .kb{display:none;font-size:.8rem;color:var(--mu);margin:0 0 8px}\n@media (hover:hover) and (pointer:fine){.ql .kb{display:block}}\n.ql .act{grid-column:1/-1;display:flex;gap:8px;margin-top:8px}\n.ql .act button{flex:1;min-height:44px;border:1px solid var(--bd);background:var(--card);color:var(--tx);border-radius:10px;cursor:pointer;font-size:.95rem}\n.ql .act button[data-a=rm]{border-color:var(--ok);color:var(--ok)}\n.ql .hh{margin:28px 0 10px;font-size:1.1rem}\n.ql .hrow{display:flex;justify-content:space-between;gap:6px 12px;flex-wrap:wrap;padding:10px 12px;border:1px solid var(--bd);border-radius:10px;background:var(--card);margin:0 0 8px;font-size:.92rem}\n.ql .hrow span:last-child{color:var(--mu)}\n.ql .empty{color:var(--mu);padding:8px 0 14px}\n.ql .clr{min-height:40px;padding:0 14px;border:1px solid var(--bd);background:var(--card);color:var(--mu);border-radius:10px;cursor:pointer;margin-top:4px}\n";document.head.appendChild(st);

const Q=(q,a,d,e)=>({q,a,d,e});
const SECTIONS=[
["General",[
Q("How many bones are in the free part of ONE upper limb if you exclude all 8 carpals?","22",["19","24","30","27"],"1 humerus + 1 radius + 1 ulna + 5 metacarpals + 14 phalanges = 22."),
Q("Which bone belongs to the pectoral girdle and is the only girdle bone that articulates directly with the axial skeleton?","Clavicle",["Scapula","Humerus","Manubrium","First rib"],"The clavicle meets the manubrium at the sternoclavicular joint. The scapula has no bony attachment to the axial skeleton."),
Q("The primary function of the appendicular skeleton is:","Movement",["Protection of the central nervous system","Haematopoiesis only","Support of the head","Storage of calcium only"],"Appendicular skeleton = movement; the axial skeleton gives support and protection."),
Q("Which breakdown of the 32 bones of one upper limb is correct?","Girdle 2 + free part 30",["Girdle 3 + free part 29","Girdle 2 + free part 28","Girdle 1 + free part 31","Girdle 4 + free part 28"],"Clavicle + scapula = 2; the free part has 30.")
]],
["Clavicle",[
Q("The sternoclavicular joint is formed between the medial end of the clavicle and the:","Manubrium of the sternum",["Body of the sternum","Xiphoid process","Sternal angle","First rib only"],"The medial (sternal) end articulates with the manubrium."),
Q("Which description of the clavicle's curvatures is correct?","Convex anteriorly medially; concave anteriorly laterally",["Concave anteriorly medially; convex anteriorly laterally","Convex anteriorly throughout","Concave anteriorly throughout","Convex posteriorly medially; convex anteriorly laterally"],"Medial part convex forward near the sternum; lateral part concave forward near the acromion."),
Q("Which feature lies on the inferior surface of the LATERAL part of the clavicle?","Conoid tubercle",["Impression for the costoclavicular ligament","Subclavian groove","Sternal facet","Radial tuberosity"],"The conoid tubercle and trapezoid line are lateral; the costoclavicular impression is medial."),
Q("The impression for the costoclavicular ligament is found on the:","Inferior surface near the sternal end",["Inferior surface near the acromial end","Superior surface of the mid-shaft","Superior surface near the acromial end","Superior surface near the sternal end"],"Medial, inferior."),
Q("The subclavian groove lies on the:","Inferior surface of the shaft",["Superior surface of the shaft","Posterior surface of the acromial end","Anterior border of the sternal end","Inferior surface of the acromial end"],"It holds the subclavius muscle."),
Q("Where do most clavicle fractures occur, and why?","Middle third; the junction of the two curves is weakest",["Lateral end; the conoid tubercle weakens it","Sternal end; the costoclavicular ligament pulls on it","Medial third; it is the thickest part","Acromial end; the AC joint concentrates force"],"Forces pass from the limb to the trunk and the bone breaks at the junction of the curves."),
Q("After a mid-clavicular fracture, the MEDIAL fragment is typically pulled:","Upward by sternocleidomastoid",["Downward by gravity","Upward by deltoid","Downward by pectoralis major","Medially by subclavius"],"The lateral fragment drops with the weight of the arm; the medial fragment rises."),
Q("Which injury mechanism classically fractures the clavicle?","Fall on an outstretched hand (FOOSH)",["Fall directly onto the olecranon only","Hyperextension of the neck","Forced pronation of the forearm","Sudden traction on the arm"],"FOOSH transmits force up the limb to the clavicle."),
Q("Which is NOT a feature of the clavicle?","Glenoid cavity",["Trapezoid line","Conoid tubercle","Subclavian groove","Acromial facet"],"The glenoid cavity belongs to the scapula."),
Q("The lateral end of the clavicle articulates with the:","Acromion",["Coracoid process","Glenoid cavity","Spine of the scapula","Greater tubercle"],"Acromioclavicular joint."),
Q("Which statement is true of the clavicle?","It has no medullary cavity",["It has a nutrient foramen directed toward the elbow","It is the last long bone to begin ossifying","It articulates directly with the humerus","It is straight in the transverse plane"],"The clavicle is S-shaped and lacks a marrow cavity."),
Q("The trapezoid line and the conoid tubercle give attachment to the:","Coracoclavicular ligament",["Costoclavicular ligament","Coracoacromial ligament","Glenohumeral ligament","Acromioclavicular ligament only"],"Trapezoid and conoid parts of the coracoclavicular ligament.")
]],
["Scapula",[
Q("The superior angle of the scapula is where:","The medial border meets the superior border",["The lateral border meets the superior border","The medial border meets the lateral border","The superior border meets the spine","The lateral border meets the glenoid cavity"],"It is the uppermost aspect of the scapula."),
Q("The inferior angle is formed by the meeting of the:","Medial and lateral borders",["Medial and superior borders","Lateral and superior borders","Superior border and scapular notch","Spine and medial border"],"Inferior angle = medial + lateral borders."),
Q("The lateral (axillary) border is the border closest to the:","Arm",["Vertebral column","Clavicle","Sternum","Neck"],"The medial border is the one nearest the vertebral column."),
Q("The 'vertebral border' of the scapula is the:","Medial border",["Lateral border","Superior border","Inferior border","Axillary border"],"Medial = vertebral."),
Q("The subscapular fossa is located on the:","Anterior (costal) surface",["Posterior surface above the spine","Posterior surface below the spine","Superior border","Lateral border"],"Concavity for subscapularis."),
Q("Supraspinatus arises from the:","Supraspinous fossa",["Infraspinous fossa","Subscapular fossa","Glenoid cavity","Lateral border"],"Posterior, above the spine."),
Q("The infraspinous fossa is:","Posterior, inferior to the spine",["Posterior, superior to the spine","Anterior, concave","Anterior, convex","Lateral, inferior to the acromion"],"Site of infraspinatus."),
Q("The spine of the scapula ends laterally as the:","Acromion",["Coracoid process","Glenoid cavity","Scapular notch","Infraglenoid tubercle"],"The acromion is the flattened lateral portion of the spine."),
Q("Which process projects anteriorly, just inferior to the lateral end of the clavicle?","Coracoid process",["Acromion","Spine","Styloid process","Olecranon"],"Coracoid = 'crow's beak', anterior."),
Q("The glenoid cavity is best described as a:","Shallow concavity that articulates with the head of the humerus",["Deep socket that articulates with the capitulum","Convex surface for the clavicle","Shallow concavity for the clavicle","Deep fossa for the trochlea"],"Glenohumeral joint."),
Q("Which is NOT found on the posterior surface of the scapula?","Subscapular fossa",["Supraspinous fossa","Infraspinous fossa","Spine","Greater scapular (spinoglenoid) notch"],"Subscapular fossa is anterior."),
Q("The scapular notch lies on the:","Superior border, medial to the coracoid process",["Lateral border below the glenoid","Medial border at the spine","Inferior angle","Superior border, lateral to the coracoid process"],"Suprascapular notch."),
Q("The greater scapular (spinoglenoid) notch lies between the:","Spine and the neck of the glenoid",["Acromion and coracoid process","Superior angle and spine","Coracoid process and glenoid","Medial border and inferior angle"],"Posterior, lateral end of the spine."),
Q("The long head of biceps arises from the:","Supraglenoid tubercle",["Infraglenoid tubercle","Tip of the coracoid process","Acromion","Subscapular fossa"],"Supra = above the glenoid = biceps."),
Q("The long head of triceps arises from the:","Infraglenoid tubercle",["Supraglenoid tubercle","Coracoid process","Spine","Scapular notch"],"Infra = below the glenoid = triceps."),
Q("Failure of fusion of an acromial ossification centre produces:","Os acromiale, which can be mistaken for a fracture",["Cross union","Bennett's fracture","Radial head subluxation","A Colles' fracture"],"Applied anatomy of the scapula."),
Q("Which is the uppermost bony point of the scapular body?","Superior angle",["Inferior angle","Coracoid process","Infraglenoid tubercle","Lateral angle"],"By the slide's definition."),
Q("In the anatomical position the scapula overlies which ribs?","2nd to 7th",["1st to 5th","3rd to 9th","4th to 10th","1st to 7th"],"Standard relationship."),
Q("Which statement about the spine of the scapula is correct?","It is posterior and separates the supraspinous from the infraspinous fossa",["It is anterior and divides the subscapular fossa","It is lateral and forms the glenoid","It is superior and forms the notch","It is medial and forms the vertebral border"],"Posterior surface landmark.")
]],
["Humerus",[
Q("The longest and largest bone of the free part of the upper limb is the:","Humerus",["Ulna","Radius","Scapula","Clavicle"],"Arm bone."),
Q("Which statement about the tubercles is correct?","Greater lies laterally; lesser lies anteriorly",["Lesser lies laterally; greater lies anteriorly","Both lie laterally","Greater lies anteriorly; lesser lies posteriorly","Greater lies medially; lesser lies laterally"],"Greater lateral, lesser anterior."),
Q("The tendon lying in the intertubercular groove belongs to the:","Long head of biceps brachii",["Short head of biceps brachii","Long head of triceps","Brachialis","Coracobrachialis"],"Bicipital groove."),
Q("The anatomical neck lies:","Immediately distal to the head",["Where the shaft begins below the tubercles","At mid-shaft","Distal to the deltoid tuberosity","At the epicondyles"],"Surgical neck is the lower one."),
Q("The surgical neck is clinically important because:","It is a common fracture site with the axillary nerve at risk",["The radial nerve winds round it","The ulnar nerve lies behind it","It is the site of the epiphyseal line","The median nerve crosses it"],"Axillary nerve + posterior circumflex humeral artery."),
Q("The deltoid tuberosity is located:","About mid-shaft on the lateral aspect",["On the medial aspect of the proximal shaft","On the posterior distal shaft","On the lesser tubercle","On the lateral epicondyle"],"Deltoid insertion."),
Q("The capitulum is ___ and articulates with the ___:","Lateral; head of the radius",["Medial; head of the radius","Lateral; trochlear notch","Medial; trochlear notch","Lateral; head of the ulna"],"Round knob, lateral."),
Q("The trochlea is ___ and articulates with the ___:","Medial; trochlear notch of the ulna",["Lateral; head of the radius","Medial; head of the radius","Lateral; trochlear notch","Medial; radial notch"],"Spool-shaped, medial."),
Q("The coronoid fossa receives the coronoid process during:","Forearm flexion",["Forearm extension","Pronation","Supination","Abduction"],"Anterior fossa, flexion."),
Q("The olecranon fossa is:","Posterior, receiving the olecranon in extension",["Anterior, receiving the olecranon in extension","Posterior, receiving the coronoid process in flexion","Anterior, receiving the radial head","Lateral, receiving the capitulum"],"Posterior distal humerus."),
Q("The medial and lateral epicondyles provide attachment for:","Forearm muscles",["Rotator cuff muscles","Pectoral muscles","The deltoid","Intrinsic hand muscles"],"Common flexor and extensor origins."),
Q("Listing the greater tubercle facets from superior to inferior gives:","Supraspinatus, infraspinatus, teres minor",["Infraspinatus, supraspinatus, teres minor","Subscapularis, supraspinatus, infraspinatus","Teres minor, infraspinatus, supraspinatus","Supraspinatus, teres minor, infraspinatus"],"As on the slide of the head viewed from above."),
Q("The radial fossa is:","Anterior, above the capitulum",["Posterior, above the trochlea","Anterior, above the trochlea","Posterior, above the capitulum","On the lateral epicondyle"],"It receives the radial head in full flexion."),
Q("A mid-shaft humeral fracture most endangers the:","Radial nerve",["Axillary nerve","Ulnar nerve","Median nerve","Musculocutaneous nerve"],"Radial nerve in the spiral groove."),
Q("The nerve lying behind the medial epicondyle is the:","Ulnar nerve",["Radial nerve","Median nerve","Axillary nerve","Musculocutaneous nerve"],"'Funny bone'."),
Q("Which is NOT a feature of the distal humerus?","Radial tuberosity",["Radial fossa","Coronoid fossa","Olecranon fossa","Trochlea"],"Radial tuberosity is on the radius."),
Q("Pectoralis major inserts into the:","Lateral lip of the intertubercular groove",["Medial lip of the groove","Floor of the groove","Deltoid tuberosity","Lesser tubercle"],"Lady between two majors: lateral lip = pec major."),
Q("The floor of the intertubercular groove receives the tendon of:","Latissimus dorsi",["Pectoralis major","Teres major","Deltoid","Subscapularis"],"Lat dorsi on the floor; teres major on the medial lip."),
Q("The nerve in contact with the surgical neck supplies:","Deltoid and teres minor",["Supraspinatus","Biceps brachii","Triceps","Brachialis"],"Axillary nerve."),
Q("Which pairing is correct?","Lesser tubercle: subscapularis",["Greater tubercle: subscapularis","Lesser tubercle: supraspinatus","Greater tubercle: teres major","Lesser tubercle: infraspinatus"],"Rotator cuff insertions.")
]],
["Radius",[
Q("The radius lies ___ to the ulna:","Lateral (thumb side)",["Medial (little-finger side)","Anterior","Posterior","Distal"],"Radius = thumb side."),
Q("The head of the radius is:","Disc-shaped, articulating with the capitulum and the radial notch of the ulna",["Spool-shaped, articulating with the trochlea","Disc-shaped, articulating with the trochlear notch","Hook-shaped, articulating with the capitulum","Disc-shaped, articulating with the ulnar notch"],"Proximal end."),
Q("The radial tuberosity is the attachment of:","Biceps brachii",["Brachialis","Pronator teres","Supinator","Triceps"],"Medial and inferior to the neck."),
Q("The radial styloid process is:","A large distal projection on the lateral side",["A small proximal projection on the medial side","A posterior projection of the head","A medial distal projection","An anterior projection on the proximal shaft"],"Distal lateral."),
Q("The distal end of the radius articulates with the:","Scaphoid and lunate",["Lunate and triquetrum","Scaphoid and trapezium","Capitate and lunate","Pisiform and triquetrum"],"Two facets on the distal radius."),
Q("The ulnar notch of the radius receives the:","Head of the ulna",["Styloid process of the ulna","Olecranon","Coronoid process","Capitulum"],"Distal radioulnar joint."),
Q("The dorsal (Lister's) tubercle is on the:","Posterior surface of the distal radius",["Anterior surface of the distal radius","Proximal ulna","Posterior surface of the distal ulna","Radial head"],"Dorsal tubercle."),
Q("Which statement about widths is correct?","The radius is widest distally; the ulna is widest proximally",["The radius is widest proximally; the ulna is widest distally","Both are widest proximally","Both are widest distally","Both have equal width throughout"],"Opposite ends are the stout ends."),
Q("The roughening for pronator teres is on the:","Lateral surface of the radial shaft at mid-level",["Medial surface of the ulnar shaft","Distal anterior radius","Anterior ulnar shaft","Radial neck"],"Slide shows it on the radius."),
Q("The interosseous border of the radius faces:","The ulna (medially)",["Laterally","Anteriorly","Posteriorly","The humerus"],"Sharp border for the interosseous membrane.")
]],
["Ulna",[
Q("Compared with the radius, the ulna is:","Longer and medial",["Shorter and medial","Longer and lateral","Shorter and lateral","Equal and anterior"],"Ulna = longer."),
Q("The olecranon is:","The large prominent proximal end, the tip of the elbow",["The anterior lip of the proximal ulna","The distal styloid projection","The notch for the radial head","The roughness for brachialis"],"Posterior and proximal."),
Q("The coronoid process is:","The anterior lip of the proximal ulna",["The posterior tip of the elbow","The distal projection","The notch for the radius","A tuberosity on the shaft"],"Anterior."),
Q("The trochlear notch is bounded by the:","Olecranon and coronoid process",["Olecranon and radial notch","Coronoid process and styloid process","Radial and ulnar notches","Olecranon and ulnar tuberosity"],"Receives the trochlea."),
Q("The radial notch is on the:","Lateral side of the coronoid process of the ulna",["Distal radius","Medial side of the coronoid process","Posterior olecranon","Head of the ulna"],"Proximal radioulnar joint."),
Q("The ulnar styloid process is:","A thin cylindrical projection on the posterior side of the ulnar head",["Anterior and lateral on the head","Lateral at the radial notch","Anterior on the coronoid process","On the olecranon"],"Distal."),
Q("The ulnar tuberosity lies:","Just below the coronoid process (brachialis insertion)",["On the olecranon (triceps insertion)","On the radial neck (biceps insertion)","At the styloid process","At the trochlear notch"],"Brachialis."),
Q("Does the ulna directly articulate with the carpal bones?","No; an articular disc separates it from them",["Yes, with the lunate","Yes, with the triquetrum","Yes, with the pisiform","Yes, with the scaphoid"],"The articular disc attaches near the ulnar styloid."),
Q("The articular disc of the wrist attaches to the:","Distal ulna near the styloid process",["Radial head","Olecranon","Coronoid process","Ulnar tuberosity"],"As labelled on the slide.")
]],
["Joints & Applied",[
Q("The proximal radioulnar joint is formed by the:","Head of the radius and the radial notch of the ulna",["Head of the ulna and the ulnar notch of the radius","Head of the radius and the trochlear notch","Capitulum and the radial notch","Olecranon and the radial head"],"Proximal."),
Q("The distal radioulnar joint is formed by the:","Head of the ulna and the ulnar notch of the radius",["Head of the radius and the radial notch","Styloid of the ulna and the scaphoid","Head of the ulna and the lunate","Ulnar notch and the pisiform"],"Distal."),
Q("The interosseous membrane connects the:","Shafts of the radius and ulna",["Heads of the radius and ulna","Radius and humerus","Ulna and carpals","Styloid processes only"],"Fibrous sheet."),
Q("Subluxation of the radial head ('pulled elbow') is typically seen in:","Young children after sudden traction on the hand",["Elderly people after a FOOSH","Athletes after a direct blow","Neonates at birth","Adults after forced supination"],"Annular ligament slips."),
Q("Cross union refers to:","Bony union between radius and ulna after a forearm fracture, limiting pronation and supination",["Failure of fusion of the acromion","Union of the scaphoid fragments","Fusion of two carpal bones","Union between the humerus and ulna"],"Applied anatomy of the forearm."),
Q("A proximal ulnar (olecranon) fracture fragment is displaced by the pull of:","Triceps",["Biceps","Brachialis","Anconeus only","Pronator teres"],"Triceps inserts on the olecranon."),
Q("A Colles' fracture is:","A distal radius fracture with dorsal displacement of the distal fragment",["A distal radius fracture with volar displacement","A fracture of the scaphoid waist","A fracture of the base of the first metacarpal","A fracture of the radial neck"],"Dinner-fork deformity (outward on the slide)."),
Q("A Smith's fracture is:","A distal radius fracture with volar (inward) displacement",["A distal radius fracture with dorsal displacement","A fracture of the hook of the hamate","A fracture of the ulnar styloid only","A fracture of the olecranon"],"Reverse Colles'.")
]],
["Hand",[
Q("The proximal row of carpals from lateral to medial is:","Scaphoid, lunate, triquetrum, pisiform",["Scaphoid, triquetrum, lunate, pisiform","Lunate, scaphoid, pisiform, triquetrum","Trapezium, trapezoid, capitate, hamate","Scaphoid, lunate, pisiform, triquetrum"],"S L T P."),
Q("The distal row of carpals from lateral to medial is:","Trapezium, trapezoid, capitate, hamate",["Trapezoid, trapezium, capitate, hamate","Trapezium, capitate, trapezoid, hamate","Hamate, capitate, trapezoid, trapezium","Scaphoid, trapezium, capitate, hamate"],"T T C H."),
Q("In 'Stop Letting Those People Touch The Cadaver's Hand', the word 'Touch' stands for:","Trapezium",["Triquetrum","Trapezoid","Capitate","Hamate"],"Those = Triquetrum, People = Pisiform, Touch = Trapezium, The = Trapezoid."),
Q("The most commonly fractured carpal bone is the:","Scaphoid",["Lunate","Triquetrum","Capitate","Hamate"],"Scaphoid."),
Q("A feared complication of a scaphoid waist fracture is:","Avascular necrosis of the proximal fragment",["Avascular necrosis of the distal pole","Carpal tunnel closure","Cross union","Radial nerve palsy"],"Blood enters distally, so the proximal fragment suffers."),
Q("The carpal tunnel is the space between the carpal bones and the:","Flexor retinaculum",["Extensor retinaculum","Palmar aponeurosis","Interosseous membrane","Annular ligament"],"Flexor retinaculum."),
Q("The metacarpals are numbered:","I to V, lateral to medial",["I to V, medial to lateral","A to E, lateral to medial","I to IV, lateral to medial","I to V, proximal to distal"],"Thumb = I."),
Q("There are ___ phalanges in total, with ___ in the thumb:","14; 2",["14; 3","12; 2","15; 3","14; 1"],"Three in each finger, two in the thumb."),
Q("Each phalanx consists of:","Base, shaft and head",["Head, neck and tuberosity","Base, neck and styloid","Body, spine and head","Shaft and condyles"],"Typical long-bone parts."),
Q("Bennett's fracture involves the:","Base of the first metacarpal",["Neck of the fifth metacarpal","Waist of the scaphoid","Distal radius","Hook of the hamate"],"Intra-articular fracture-dislocation."),
Q("The base of the third metacarpal articulates with the:","Capitate",["Hamate","Trapezoid","Trapezium","Lunate"],"Middle metacarpal on capitate."),
Q("The thumb has:","One interphalangeal joint only",["PIP and DIP joints","Three interphalangeal joints","No interphalangeal joint","DIP joint only"],"Two phalanges, one IP joint."),
Q("The pisiform bone is:","A sesamoid bone in the tendon of flexor carpi ulnaris, lying on the triquetrum",["The most lateral carpal","A bone of the distal row","The carpal articulating with the radius","A bone of the thumb ray"],"Proximal row, medial.")
]],
["Pectoral Region",[
Q("Skin just below the clavicle is supplied by the:","Supraclavicular nerves (C3, C4)",["Intercostobrachial nerve (T2)","Lateral cutaneous nerves (T3 to T6)","Anterior cutaneous nerves (T2 to T6)","Axillary nerve"],"Supraclavicular nerves from C3 and C4."),
Q("The intercostobrachial nerve has the root value:","T2",["T1","T3","C4","T4"],"Slide lists T2."),
Q("Which is NOT a content of the superficial fascia of the pectoral region?","Pectoralis major",["Platysma","Breast","Cutaneous nerves","Cutaneous vessels"],"Pectoralis major lies deep to the fascia."),
Q("The supraclavicular nerves arise from:","C3 and C4",["C1 and C2","C5 and C6","T1 and T2","C2 and C3"],"The transverse cervical nerve is C2 and C3."),
Q("The platysma lies in the:","Superficial fascia, extending over the clavicle",["Deep fascia","Clavipectoral fascia","Beneath pectoralis major","Subperiosteal layer"],"Superficial fascia contents.")
]]
];

const L_OLD=[
{title:"1. Scapula, posterior view",
 shapes:`<polygon class="shape" points="110,50 235,85 265,140 190,270 120,285 105,160"/><polygon class="shape" points="108,122 270,80 276,94 112,140"/><ellipse class="shape" cx="302" cy="76" rx="32" ry="12" transform="rotate(-10 302 76)"/><ellipse class="shape" cx="268" cy="152" rx="13" ry="22"/>`,
 pins:[
 [110,52,28,18,"Superior angle",["Inferior angle","Lateral angle","Acromial angle","Glenoid angle"]],
 [165,88,105,8,"Supraspinous fossa",["Infraspinous fossa","Subscapular fossa","Greater scapular notch","Scapular notch"]],
 [200,108,185,8,"Spine of scapula",["Acromion","Coracoid process","Lateral border","Superior border"]],
 [310,72,345,20,"Acromion",["Coracoid process","Spine of scapula","Acromial angle","Glenoid cavity"]],
 [268,152,350,115,"Glenoid cavity",["Subscapular fossa","Coracoid process","Infraglenoid tubercle","Scapular notch"]],
 [232,205,335,200,"Lateral (axillary) border",["Medial (vertebral) border","Superior border","Inferior border","Spine of scapula"]],
 [120,284,60,290,"Inferior angle",["Superior angle","Lateral angle","Acromial angle","Costal angle"]],
 [106,170,20,165,"Medial (vertebral) border",["Lateral (axillary) border","Superior border","Spine of scapula","Costal border"]],
 [175,205,190,285,"Infraspinous fossa",["Supraspinous fossa","Subscapular fossa","Glenoid fossa","Infraglenoid fossa"]]
 ]},
{title:"2. Scapula, anterior view",
 shapes:`<polygon class="shape" points="110,50 235,85 265,140 190,270 120,285 105,160"/><ellipse class="shape" cx="240" cy="66" rx="22" ry="9"/><ellipse class="shape" cx="305" cy="60" rx="30" ry="11" transform="rotate(-8 305 60)"/><ellipse class="shape" cx="268" cy="152" rx="13" ry="22"/>`,
 pins:[
 [175,175,20,205,"Subscapular fossa",["Supraspinous fossa","Infraspinous fossa","Glenoid fossa","Subacromial fossa"]],
 [238,66,235,10,"Coracoid process",["Acromion","Spine of scapula","Infraglenoid tubercle","Olecranon"]],
 [268,152,350,140,"Glenoid cavity",["Scapular notch","Coracoid process","Acromion","Subscapular fossa"]],
 [312,60,350,30,"Acromion",["Coracoid process","Spine of scapula","Glenoid cavity","Clavicular facet"]],
 [222,80,170,10,"Scapular notch",["Greater scapular notch","Glenoid notch","Suprascapular foramen","Acromial notch"]],
 [150,67,100,10,"Superior border",["Medial border","Lateral border","Inferior border","Spine"]],
 [233,215,330,230,"Lateral (axillary) border",["Medial (vertebral) border","Superior border","Neck of scapula","Spine"]],
 [120,284,60,290,"Inferior angle",["Superior angle","Lateral angle","Acromial angle","Costal angle"]]
 ]},
{title:"3. Humerus, anterior view",
 shapes:`<circle class="shape" cx="140" cy="62" r="32"/><rect class="shape" x="166" y="90" width="42" height="150" rx="8"/><ellipse class="shape" cx="220" cy="70" rx="16" ry="22"/><ellipse class="shape" cx="182" cy="62" rx="10" ry="12"/><line class="ln" x1="193" y1="78" x2="193" y2="135"/><ellipse class="shape" cx="188" cy="237" rx="12" ry="8"/><circle class="shape" cx="216" cy="271" r="16"/><ellipse class="shape" cx="176" cy="272" rx="20" ry="14"/><ellipse class="shape" cx="150" cy="248" rx="12" ry="10"/><ellipse class="shape" cx="242" cy="248" rx="12" ry="10"/>`,
 pins:[
 [132,55,20,15,"Head of humerus",["Greater tubercle","Lesser tubercle","Capitulum","Trochlea"]],
 [182,60,20,65,"Lesser tubercle",["Greater tubercle","Deltoid tuberosity","Medial epicondyle","Head of humerus"]],
 [163,92,20,115,"Anatomical neck",["Surgical neck","Neck of radius","Intertubercular groove","Epiphyseal line of the shaft"]],
 [188,237,20,185,"Coronoid fossa",["Olecranon fossa","Radial fossa","Intertubercular groove","Trochlear notch"]],
 [150,248,20,225,"Medial epicondyle",["Lateral epicondyle","Trochlea","Capitulum","Lateral supracondylar ridge"]],
 [176,274,20,275,"Trochlea",["Capitulum","Trochlear notch","Medial epicondyle","Coronoid process"]],
 [222,68,345,15,"Greater tubercle",["Lesser tubercle","Deltoid tuberosity","Lateral epicondyle","Anatomical neck"]],
 [193,105,345,65,"Intertubercular groove",["Radial groove","Coronoid fossa","Subclavian groove","Olecranon fossa"]],
 [190,125,345,115,"Surgical neck",["Anatomical neck","Neck of the glenoid","Radial neck","Supracondylar region"]],
 [206,170,345,165,"Deltoid tuberosity",["Radial tuberosity","Ulnar tuberosity","Greater tubercle","Lateral epicondyle"]],
 [244,248,345,220,"Lateral epicondyle",["Medial epicondyle","Capitulum","Trochlea","Greater tubercle"]],
 [218,272,345,270,"Capitulum",["Trochlea","Head of radius","Lateral epicondyle","Radial fossa"]]
 ]},
{title:"4. Humerus: nerve at risk in a fracture here",
 note:"Tap each box: which nerve is most at risk at that site?",
 shapes:`<circle class="shape" cx="140" cy="52" r="30"/><rect class="shape" x="168" y="70" width="44" height="170" rx="8"/><ellipse class="shape" cx="190" cy="265" rx="46" ry="18"/><path class="fatb" stroke="#d98b2b" stroke-width="3" d="M120 100 C150 112,190 112,235 98"/><path class="fatb" stroke="#d98b2b" stroke-width="3" d="M132 88 C165 115,205 155,238 195"/><path class="fatb" stroke="#d98b2b" stroke-width="3" d="M150 225 L150 290"/>`,
 pins:[
 [190,108,20,60,"Axillary nerve",["Radial nerve","Ulnar nerve","Musculocutaneous nerve","Suprascapular nerve"]],
 [195,150,345,100,"Radial nerve",["Axillary nerve","Median nerve","Ulnar nerve","Musculocutaneous nerve"]],
 [150,260,20,250,"Ulnar nerve",["Radial nerve","Median nerve","Axillary nerve","Musculocutaneous nerve"]],
 [195,238,345,200,"Median nerve (with brachial artery)",["Radial nerve","Ulnar nerve","Axillary nerve","Suprascapular nerve"]]
 ]},
{title:"5. Clavicle, inferior view",
 shapes:`<path class="fat" stroke-width="24" d="M45 152 C120 120,160 192,220 162 S320 128,360 150"/><path class="fatb" stroke-width="1.5" d="M45 140 C120 108,160 180,220 150 S320 116,360 138" style="stroke-width:1.5"/>`,
 pins:[
 [46,152,20,60,"Sternal end",["Acromial end","Conoid tubercle","Costoclavicular impression","Trapezoid line"]],
 [82,150,60,230,"Impression for costoclavicular ligament",["Conoid tubercle","Subclavian groove","Trapezoid line","Deltoid tubercle"]],
 [190,170,180,240,"Subclavian groove",["Intertubercular groove","Radial groove","Conoid tubercle","Costoclavicular impression"]],
 [300,142,285,50,"Conoid tubercle",["Trapezoid line","Coracoid tubercle","Deltoid tuberosity","Subclavian groove"]],
 [335,145,345,100,"Trapezoid line",["Conoid tubercle","Oblique line","Subclavian groove","Acromial facet"]],
 [362,150,350,200,"Acromial end",["Sternal end","Conoid tubercle","Coracoid process","Trapezoid line"]]
 ]},
{title:"6. Radius and ulna, anterior view (right)",
 shapes:`<polygon class="shape" points="145,62 168,62 170,110 182,240 192,282 128,282 140,240 150,110"/><polygon class="shape" points="198,38 232,38 232,72 222,112 218,250 226,285 205,285 200,250 196,112 190,62"/><ellipse class="shape" cx="156" cy="56" rx="16" ry="7"/><rect class="shape" x="172" y="125" width="24" height="105" opacity=".6"/>`,
 pins:[
 [215,38,300,8,"Olecranon",["Coronoid process","Ulnar styloid process","Radial tuberosity","Trochlea"]],
 [200,64,300,50,"Coronoid process",["Olecranon","Radial notch","Styloid process","Ulnar tuberosity"]],
 [156,56,20,18,"Head of radius",["Neck of radius","Capitulum","Head of ulna","Radial tuberosity"]],
 [166,96,20,70,"Radial tuberosity",["Ulnar tuberosity","Deltoid tuberosity","Dorsal tubercle","Radial styloid process"]],
 [185,175,345,150,"Interosseous membrane",["Annular ligament","Articular disc","Flexor retinaculum","Oblique cord"]],
 [135,282,20,255,"Radial styloid process",["Ulnar styloid process","Dorsal tubercle","Radial notch","Ulnar notch"]],
 [214,272,345,225,"Head of ulna",["Head of radius","Olecranon","Radial notch","Capitulum"]],
 [226,286,345,275,"Ulnar styloid process",["Radial styloid process","Coronoid process","Dorsal tubercle","Olecranon"]]
 ]},
{title:"7. Carpal bones, anterior view (right hand)",
 shapes:`<rect class="shape" x="90" y="38" width="100" height="26" rx="6"/><rect class="shape" x="208" y="38" width="72" height="26" rx="6"/><ellipse class="shape" cx="110" cy="110" rx="26" ry="16"/><ellipse class="shape" cx="170" cy="102" rx="22" ry="16"/><ellipse class="shape" cx="230" cy="106" rx="22" ry="15"/><circle class="shape" cx="284" cy="122" r="12"/><rect class="shape" x="76" y="164" width="38" height="32" rx="8"/><rect class="shape" x="130" y="168" width="34" height="28" rx="6"/><rect class="shape" x="186" y="164" width="44" height="34" rx="8"/><rect class="shape" x="248" y="164" width="44" height="34" rx="8"/>`,
 pins:[
 [110,110,60,8,"Scaphoid",["Lunate","Trapezium","Trapezoid","Capitate"]],
 [170,100,130,8,"Lunate",["Scaphoid","Triquetrum","Capitate","Pisiform"]],
 [230,104,200,8,"Triquetrum",["Trapezium","Trapezoid","Lunate","Pisiform"]],
 [284,122,300,8,"Pisiform",["Triquetrum","Hamate","Lunate","Capitate"]],
 [95,180,50,270,"Trapezium",["Trapezoid","Scaphoid","Triquetrum","Capitate"]],
 [147,182,115,270,"Trapezoid",["Trapezium","Capitate","Triquetrum","Hamate"]],
 [208,181,180,270,"Capitate",["Hamate","Lunate","Trapezoid","Scaphoid"]],
 [270,181,250,270,"Hamate",["Capitate","Triquetrum","Pisiform","Trapezium"]]
 ]},
{title:"8. Hand skeleton (right, palmar)",
 shapes:`<ellipse class="shape" cx="190" cy="232" rx="95" ry="20"/><path class="fat" stroke-width="14" d="M110 205 L98 168"/><path class="fat" stroke-width="12" d="M96 160 L82 128"/><path class="fat" stroke-width="11" d="M80 122 L70 98"/><rect class="shape" x="133" y="132" width="14" height="68" rx="5"/><rect class="shape" x="173" y="128" width="14" height="72" rx="5"/><rect class="shape" x="213" y="132" width="14" height="68" rx="5"/><rect class="shape" x="251" y="138" width="14" height="62" rx="5"/><rect class="shape" x="133" y="92" width="14" height="34" rx="5"/><rect class="shape" x="173" y="88" width="14" height="34" rx="5"/><rect class="shape" x="213" y="92" width="14" height="34" rx="5"/><rect class="shape" x="251" y="100" width="14" height="32" rx="5"/><rect class="shape" x="133" y="64" width="14" height="24" rx="5"/><rect class="shape" x="173" y="58" width="14" height="26" rx="5"/><rect class="shape" x="213" y="64" width="14" height="24" rx="5"/><rect class="shape" x="251" y="74" width="14" height="22" rx="5"/>`,
 pins:[
 [104,186,20,210,"1st metacarpal",["2nd metacarpal","Trapezium","Proximal phalanx of thumb","Scaphoid"]],
 [258,170,345,200,"5th metacarpal",["4th metacarpal","Hamate","3rd metacarpal","Proximal phalanx of little finger"]],
 [140,198,130,270,"Base of metacarpal",["Head of metacarpal","Shaft of metacarpal","Neck of metacarpal","Tuberosity of metacarpal"]],
 [140,134,20,130,"Head of metacarpal",["Base of metacarpal","Shaft of metacarpal","Head of proximal phalanx","Base of proximal phalanx"]],
 [140,108,20,75,"Proximal phalanx",["Middle phalanx","Distal phalanx","Metacarpal","Sesamoid bone"]],
 [180,72,215,8,"Middle phalanx",["Proximal phalanx","Distal phalanx","Metacarpal","Sesamoid bone"]],
 [71,98,20,25,"Distal phalanx of thumb",["Middle phalanx of thumb","Proximal phalanx of thumb","1st metacarpal","Distal phalanx of index finger"]],
 [180,127,300,60,"Metacarpophalangeal joint",["Proximal interphalangeal joint","Distal interphalangeal joint","Carpometacarpal joint","Intercarpal joint"]],
 [220,90,340,100,"Proximal interphalangeal joint",["Metacarpophalangeal joint","Distal interphalangeal joint","Carpometacarpal joint","Interphalangeal joint of the thumb"]]
 ]},
{title:"9. Pectoral girdle, anterior view",
 shapes:`<rect class="shape" x="185" y="60" width="28" height="150" rx="6"/><rect class="shape" x="185" y="60" width="28" height="42" rx="6"/><path class="ln" d="M213 100 C285 100,300 180,282 262"/><path class="ln" d="M213 130 C270 132,285 190,268 262"/><polygon class="shape" points="300,85 372,100 356,235 330,205"/><path class="fat" stroke-width="12" d="M214 72 L332 62"/><rect class="shape" x="334" y="105" width="22" height="165" rx="8"/><circle class="shape" cx="345" cy="104" r="14"/>`,
 pins:[
 [199,75,20,70,"Manubrium",["Body of sternum","Xiphoid process","Sternal angle","Jugular notch"]],
 [214,72,120,10,"Sternoclavicular joint",["Acromioclavicular joint","Glenohumeral joint","Costochondral joint","Manubriosternal joint"]],
 [272,66,220,10,"Clavicle",["Scapula","First rib","Acromion","Coracoid process"]],
 [334,62,320,10,"Acromioclavicular joint",["Sternoclavicular joint","Glenohumeral joint","Coracoclavicular joint","Scapulothoracic joint"]],
 [345,110,362,58,"Glenohumeral joint",["Acromioclavicular joint","Elbow joint","Sternoclavicular joint","Subacromial bursa"]],
 [345,170,362,150,"Scapula",["Clavicle","Rib","Humerus","Acromion"]],
 [346,235,362,230,"Humerus",["Radius","Ulna","Scapula","Clavicle"]],
 [262,200,150,270,"Rib",["Costal cartilage","Sternum","Clavicle","Vertebra"]]
 ]}
];

const IMG={"p19":{"src":"quiz/img/p19.jpg","w":800,"h":850},"p20":{"src":"quiz/img/p20.jpg","w":800,"h":850},"p13":{"src":"quiz/img/p13.jpg","w":960,"h":590},"p14":{"src":"quiz/img/p14.jpg","w":1270,"h":555},"p27":{"src":"quiz/img/p27.jpg","w":1270,"h":870},"p9":{"src":"quiz/img/p9.jpg","w":1010,"h":590},"p35":{"src":"quiz/img/p35.jpg","w":920,"h":900},"p47":{"src":"quiz/img/p47.jpg","w":1018,"h":740},"p5":{"src":"quiz/img/p5.jpg","w":610,"h":660}};

const SKIP='<rect class="skipbox" x="127" y="369" width="50" height="44" rx="7"/><text class="skiptxt" x="152" y="399" text-anchor="middle" font-size="26">D</text>';
const REAL=[
{title:"Scapula, posterior view (lettered slide)",note:"Tap a numbered box. Letter D from the slide is not asked.",img:IMG.p19,extra:SKIP,pins:[
 [736,44,0,0,"Superior angle",["Inferior angle","Lateral angle","Acromial angle","Glenoid angle"],"c"],
 [432,60,0,0,"Spine of scapula",["Acromion","Coracoid process","Superior border","Lateral border"],"c"],
 [144,225,0,0,"Acromion",["Coracoid process","Spine of scapula","Acromial angle","Glenoid cavity"],"c"],
 [227,457,0,0,"Lateral (axillary) border",["Medial (vertebral) border","Superior border","Inferior border","Neck of scapula"],"c"],
 [392,775,0,0,"Inferior angle",["Superior angle","Lateral angle","Acromial angle","Costal angle"],"c"],
 [736,143,0,0,"Supraspinous fossa",["Infraspinous fossa","Subscapular fossa","Greater scapular notch","Scapular notch"],"c"],
 [739,209,0,0,"Medial (vertebral) border",["Lateral (axillary) border","Superior border","Costal border","Inferior border"],"c"],
 [699,577,0,0,"Infraspinous fossa",["Supraspinous fossa","Subscapular fossa","Glenoid fossa","Infraglenoid fossa"],"c"]]},
{title:"Scapula, anterior (costal) view (lettered slide)",img:IMG.p20,pins:[
 [403,79,0,0,"Scapular notch",["Greater scapular notch","Glenoid notch","Coracoid notch","Acromial notch"],"c"],
 [739,214,0,0,"Acromion",["Coracoid process","Spine of scapula","Glenoid cavity","Superior angle"],"c"],
 [739,281,0,0,"Coracoid process",["Acromion","Supraglenoid tubercle","Infraglenoid tubercle","Spine of scapula"],"c"],
 [739,335,0,0,"Glenoid cavity",["Subscapular fossa","Coracoid process","Acromion","Infraglenoid tubercle"],"c"],
 [597,479,0,0,"Subscapular fossa",["Supraspinous fossa","Infraspinous fossa","Glenoid fossa","Costal fossa"],"c"]]},
{title:"Scapula, anterior view",img:IMG.p13,pins:[
 [250,22,15,10,"Acromion",["Coracoid process","Spine of scapula","Glenoid cavity","Superior angle"]],
 [330,95,15,85,"Coracoid process",["Acromion","Supraglenoid tubercle","Infraglenoid tubercle","Scapular notch"]],
 [320,165,15,160,"Glenoid cavity",["Subscapular fossa","Coracoid process","Acromion","Scapular notch"]],
 [375,330,15,330,"Lateral (axillary) border",["Medial (vertebral) border","Superior border","Inferior border","Neck of scapula"]],
 [535,38,890,10,"Superior angle",["Inferior angle","Lateral angle","Acromial angle","Glenoid angle"]],
 [480,72,890,80,"Superior border",["Medial border","Lateral border","Inferior border","Spine of scapula"]],
 [425,122,890,150,"Scapular notch",["Greater scapular notch","Glenoid notch","Acromial notch","Coracoid notch"]],
 [500,250,890,230,"Subscapular fossa",["Supraspinous fossa","Infraspinous fossa","Glenoid fossa","Costal fossa"]],
 [633,330,890,330,"Medial (vertebral) border",["Lateral (axillary) border","Superior border","Inferior border","Costal border"]],
 [525,568,890,500,"Inferior angle",["Superior angle","Lateral angle","Acromial angle","Costal angle"]]]},
{title:"Scapula, posterior and lateral views",note:"Left: posterior view. Right: lateral view (boxes 9 and 10).",img:IMG.p14,pins:[
 [300,24,20,10,"Superior angle",["Inferior angle","Lateral angle","Acromial angle","Glenoid angle"]],
 [335,110,20,90,"Supraspinous fossa",["Infraspinous fossa","Subscapular fossa","Greater scapular notch","Scapular notch"]],
 [330,330,20,330,"Infraspinous fossa",["Supraspinous fossa","Subscapular fossa","Glenoid fossa","Infraglenoid fossa"]],
 [242,300,20,200,"Medial (vertebral) border",["Lateral (axillary) border","Superior border","Spine of scapula","Costal border"]],
 [285,520,20,470,"Inferior angle",["Superior angle","Lateral angle","Acromial angle","Costal angle"]],
 [640,35,720,10,"Acromion",["Coracoid process","Spine of scapula","Glenoid cavity","Superior angle"]],
 [470,128,720,95,"Spine of scapula",["Acromion","Coracoid process","Medial border","Lateral border"]],
 [548,240,720,200,"Lateral (axillary) border",["Medial (vertebral) border","Superior border","Inferior border","Neck of scapula"]],
 [1130,170,820,90,"Glenoid cavity",["Coracoid process","Acromion","Subscapular fossa","Infraglenoid tubercle"]],
 [1235,100,1180,210,"Coracoid process",["Acromion","Spine of scapula","Glenoid cavity","Supraglenoid tubercle"]]]},
{title:"Humerus with scapula: anterior (left) and posterior (right) views",note:"Boxes 1 to 5 are on the left-hand (anterior) view; 6 to 10 on the right-hand (posterior) view.",img:IMG.p27,pins:[
 [378,122,60,170,"Head of humerus",["Greater tubercle","Lesser tubercle","Capitulum","Trochlea"]],
 [362,163,60,255,"Surgical neck",["Anatomical neck","Neck of the glenoid","Radial neck","Supracondylar region"]],
 [325,347,60,345,"Deltoid tuberosity",["Radial tuberosity","Ulnar tuberosity","Greater tubercle","Lateral epicondyle"]],
 [300,470,60,440,"Body (shaft) of humerus",["Surgical neck","Anatomical neck","Deltoid tuberosity","Shaft of radius"]],
 [490,250,560,430,"Scapula",["Clavicle","Humerus","Rib","Sternum"]],
 [1068,92,1170,10,"Greater tubercle",["Lesser tubercle","Deltoid tuberosity","Lateral epicondyle","Head of humerus"]],
 [1048,135,1170,90,"Anatomical neck",["Surgical neck","Intertubercular groove","Neck of radius","Neck of scapula"]],
 [1050,652,850,540,"Olecranon fossa",["Coronoid fossa","Radial fossa","Trochlear notch","Intertubercular groove"]],
 [1135,657,1170,560,"Lateral epicondyle",["Medial epicondyle","Capitulum","Trochlea","Greater tubercle"]],
 [1012,672,880,720,"Medial epicondyle",["Lateral epicondyle","Trochlea","Capitulum","Lesser tubercle"]]]},
{title:"Clavicle: superior (top) and inferior (bottom) views",note:"Lateral (acromial) end is on the left.",img:IMG.p9,pins:[
 [60,110,10,235,"Acromial end",["Sternal end","Conoid tubercle","Coracoid process","Trapezoid line"]],
 [838,110,930,235,"Sternal end",["Acromial end","Costoclavicular impression","Conoid tubercle","Subclavian groove"]],
 [190,480,150,530,"Conoid tubercle",["Trapezoid line","Coracoid tubercle","Deltoid tuberosity","Subclavian groove"]],
 [715,430,700,520,"Impression for costoclavicular ligament",["Conoid tubercle","Subclavian groove","Trapezoid line","Deltoid tubercle"]],
 [68,365,90,235,"Acromial facet (articular surface)",["Sternal facet","Glenoid cavity","Conoid tubercle","Coracoid facet"]],
 [828,405,860,520,"Sternal facet (articular surface)",["Acromial facet","Costoclavicular impression","Radial notch","Glenoid cavity"]]]},
{title:"Radius and ulna with humerus and carpals",note:"Left: anterior view. Right: posterior view (box 7).",img:IMG.p35,pins:[
 [140,520,20,330,"Radius",["Ulna","Humerus","Scaphoid","Clavicle"]],
 [222,400,330,340,"Ulna",["Radius","Humerus","Metacarpal","Clavicle"]],
 [188,520,330,480,"Interosseous membrane",["Annular ligament","Articular disc","Flexor retinaculum","Oblique cord"]],
 [108,635,20,560,"Radial styloid process",["Ulnar styloid process","Dorsal tubercle","Radial notch","Ulnar notch"]],
 [285,208,330,160,"Medial epicondyle of humerus",["Lateral epicondyle","Capitulum","Trochlea","Olecranon"]],
 [150,668,330,620,"Carpal bones",["Metacarpal bones","Phalanges","Sesamoid bones","Distal radius"]],
 [578,218,420,210,"Olecranon",["Coronoid process","Ulnar styloid process","Radial tuberosity","Trochlea"]]]},
{title:"Wrist and hand (anterior view on the left)",note:"All boxes point to the left-hand (anterior) picture.",img:IMG.p47,pins:[
 [125,452,15,520,"Distal phalanx of thumb",["Middle phalanx of thumb","Proximal phalanx of thumb","1st metacarpal","Distal phalanx of index finger"]],
 [158,365,15,420,"Proximal phalanx of thumb",["Distal phalanx of thumb","1st metacarpal","Middle phalanx of thumb","Proximal phalanx of index finger"]],
 [205,290,15,300,"1st metacarpal",["2nd metacarpal","Trapezium","Proximal phalanx of thumb","Scaphoid"]],
 [285,120,100,30,"Radius",["Ulna","Scaphoid","Humerus","Metacarpal"]],
 [372,95,440,30,"Ulna",["Radius","Humerus","Metacarpal","Scaphoid"]],
 [295,345,470,260,"3rd metacarpal",["2nd metacarpal","4th metacarpal","Capitate","Proximal phalanx of middle finger"]],
 [290,425,470,340,"Metacarpophalangeal joint",["Proximal interphalangeal joint","Distal interphalangeal joint","Carpometacarpal joint","Intercarpal joint"]],
 [290,485,470,420,"Proximal phalanx",["Middle phalanx","Distal phalanx","Metacarpal","Sesamoid bone"]],
 [295,590,470,500,"Middle phalanx",["Proximal phalanx","Distal phalanx","Metacarpal","Sesamoid bone"]],
 [295,652,470,580,"Distal phalanx",["Proximal phalanx","Middle phalanx","Metacarpal","Sesamoid bone"]]]},
{title:"Pectoral girdle and upper arm, anterior view",img:IMG.p5,k:1.5,pins:[
 [400,85,330,5,"Clavicle",["Scapula","First rib","Acromion","Coracoid process"]],
 [232,82,150,5,"Acromioclavicular joint",["Sternoclavicular joint","Glenohumeral joint","Coracoclavicular joint","Scapulothoracic joint"]],
 [532,100,500,5,"Sternoclavicular joint",["Acromioclavicular joint","Glenohumeral joint","Costochondral joint","Manubriosternal joint"]],
 [248,152,20,95,"Glenohumeral joint",["Acromioclavicular joint","Elbow joint","Sternoclavicular joint","Subacromial bursa"]],
 [278,205,20,190,"Scapula",["Clavicle","Rib","Humerus","Acromion"]],
 [185,420,20,330,"Humerus",["Radius","Ulna","Scapula","Clavicle"]],
 [440,470,20,500,"Costal cartilage",["Rib","Sternum","Clavicle","Manubrium"]]]}
];
const L=[...REAL,...L_OLD.filter(d=>/nerve|Carpal/i.test(d.title)).map(d=>({...d,title:d.title.replace(/^\d+\.\s*/,'')+' (schematic)'}))];


const K='ice.ul.v1';
const hash=s=>{let h=5381;for(let i=0;i<s.length;i++)h=(h*33^s.charCodeAt(i))>>>0;return h.toString(36)};
const ld=()=>{try{const d=JSON.parse(localStorage.getItem(K));if(d&&typeof d==='object')return{cur:d.cur||null,hist:d.hist||[],miss:d.miss||{}}}catch(e){}return{cur:null,hist:[],miss:{}}};
const upd=f=>{const d=ld();f(d);try{localStorage.setItem(K,JSON.stringify(d))}catch(e){}return d};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const ALL=[];SECTIONS.forEach(([t,qs])=>qs.forEach(q=>ALL.push({...q,t,id:hash(q.q)})));
const BYID={};ALL.forEach(q=>BYID[q.id]=q);
const LTOT=L.reduce((a,d)=>a+d.pins.length,0);
const TOPICS=SECTIONS.map(s=>s[0]);

/* one MCQ card, used by the quiz and by the review page */
function mcqCard(q,label,o){
  const c=document.createElement('div');c.className='card mq';c.dataset.t=q.t;
  c.innerHTML=`<div class="qh"><span class="topic">${label}</span><div class="q">${q.q}</div></div><div class="os"></div>`;
  const os=c.querySelector('.os');let done=false;
  const lock=v=>{done=true;c.classList.add('done');
    c.querySelectorAll('.opt').forEach(x=>{x.classList.add('lock');if(x.dataset.v===q.a)x.classList.add('ok');else if(x.dataset.v===v)x.classList.add('no')});
    const e=document.createElement('div');e.className='exp';e.textContent=(v===q.a?'Correct. ':'Not quite. ')+q.e;c.appendChild(e);return v===q.a};
  shuffle([q.a,...q.d]).forEach((t,i)=>{const b=document.createElement('button');b.className='opt';b.dataset.v=t;b.textContent=String.fromCharCode(65+i)+'. '+t;
    b.onclick=()=>{if(done)return;const r=lock(t);o.onAnswer&&o.onAnswer(r,t,c)};os.appendChild(b)});
  if(o.saved!=null)lock(o.saved);
  return c;
}

const TPL='<div class="hd"><div class="tabs"><button id="tM" class="on">100 MCQs</button><button id="tL">Labelling (11)</button></div><p class="score" id="score"></p><div class="bar"><i id="bar"></i></div></div><div class="tools"><select id="topic" aria-label="Topic"></select><button id="shuf">Shuffle</button><button id="rst">Finish &amp; restart</button></div><p class="kb">Keys: A–E or 1–5 to answer · N for next unanswered</p><div id="mcq"></div><div id="lab" class="hide"></div>';

function mount(root){
  root.classList.add('ql');root.innerHTML=TPL;
  const $=s=>root.querySelector(s),box=$('#mcq'),lab=$('#lab');
  const newCur=sh=>({ord:(sh?shuffle(ALL):ALL).map(q=>q.id),a:{},l:{},t:Date.now()});
  let cur=ld().cur;
  if(!(cur&&cur.ord&&cur.ord.length===ALL.length&&new Set(cur.ord).size===ALL.length&&cur.ord.every(id=>BYID[id])))cur=newCur(false);
  cur.a=cur.a||{};cur.l=cur.l||{};
  const save=(f)=>upd(x=>{x.cur=cur;f&&f(x)});
  const lkey=(di,i)=>di+'.'+i;
  function stats(){let mc=0,md=0,lc=0,lg=0;
    for(const id in cur.a)if(BYID[id]){md++;if(cur.a[id]===BYID[id].a)mc++}
    for(const k in cur.l){const [di,i]=k.split('.');const p=L[di]&&L[di].pins[i];if(p){lg++;if(cur.l[k]===p[4])lc++}}
    return{mc,md,lc,lg}}
  function score(){const s=stats();
    $('#score').textContent=`MCQs: ${s.mc}/${s.md} correct (of ${ALL.length}) · Labelling: ${s.lc}/${s.lg} correct (of ${LTOT})`;
    $('#bar').style.width=((s.md+s.lg)/(ALL.length+LTOT)*100)+'%'}

  $('#topic').innerHTML='<option value="">All topics</option>'+TOPICS.map(t=>`<option>${t}</option>`).join('');
  const filter=()=>{const t=$('#topic').value;box.querySelectorAll('.card.mq').forEach(c=>{c.hidden=!!t&&c.dataset.t!==t})};
  $('#topic').onchange=filter;

  function buildMCQ(){
    box.innerHTML='';
    cur.ord.forEach((id,n)=>{const q=BYID[id];
      box.appendChild(mcqCard(q,`${n+1}/${ALL.length} · ${q.t}`,{saved:cur.a[id],onAnswer:(r,t)=>{cur.a[id]=t;save(x=>{if(!r)x.miss[id]=(x.miss[id]||0)+1});score()}}))});
    filter();score();
  }

  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.querySelectorAll('image[data-src]').forEach(im=>{im.setAttribute('href',im.dataset.src);im.removeAttribute('data-src')});io.unobserve(e.target)}),{rootMargin:'500px'});
  function buildLab(){
    lab.innerHTML='';
    L.forEach((d,di)=>{
      const img=d.img,k=img?(d.k||img.w/400*0.75):1,bw=28*k,bh=24*k;
      const vb=img?`0 0 ${img.w} ${img.h}`:'0 0 400 320';
      let pins='';
      d.pins.forEach((p,i)=>{let [tx,ty,bx,by]=p;if(p[6]==='c'){bx=tx-bw/2;by=ty-bh/2}
        pins+=`<g class="pin" data-i="${i}"><line x1="${bx+bw/2}" y1="${by+bh/2}" x2="${tx}" y2="${ty}" stroke-width="${1.2*k}"/><circle cx="${tx}" cy="${ty}" r="${3.5*k}"/><rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="${5*k}" stroke-width="${1.6*k}"/><text x="${bx+bw/2}" y="${by+bh*0.7}" text-anchor="middle" font-size="${13*k}">${i+1}</text></g>`});
      const pic=img?`<image data-src="${img.src}" x="0" y="0" width="${img.w}" height="${img.h}"/>${d.extra||''}`:d.shapes;
      const sec=document.createElement('section');sec.className='card lc';
      sec.innerHTML=`<h3>${di+1}. ${d.title}</h3><div class="zr"><p class="sub">${d.note||'Tap a numbered box to reveal the options.'}</p><button class="zb" type="button">Zoom</button></div><div class="sv"><svg viewBox="${vb}">${pic}${pins}</svg></div><div class="side"><div class="panel">Tap a numbered box.</div><div class="prog"></div></div>`;
      const panel=sec.querySelector('.panel'),prog=sec.querySelector('.prog');
      sec.querySelector('.zb').onclick=function(){this.textContent=sec.querySelector('.sv').classList.toggle('z')?'Fit':'Zoom'};
      const st=d.pins.map((p,i)=>{const s=cur.l[lkey(di,i)];return{opts:shuffle([p[4],...p[5]]),done:s!=null,pick:s!=null?s:null}});
      let got=0,ans=0;
      st.forEach((s,i)=>{if(s.done){ans++;const ok=s.pick===d.pins[i][4];if(ok)got++;sec.querySelector(`.pin[data-i="${i}"]`).classList.add(ok?'ok':'no')}});
      const upd2=()=>{prog.textContent=`${ans}/${d.pins.length} answered, ${got} correct`};upd2();
      sec.querySelectorAll('.pin').forEach(g=>g.addEventListener('click',()=>{
        const i=+g.dataset.i,p=d.pins[i],s=st[i];
        sec.querySelectorAll('.pin').forEach(x=>x.classList.remove('act'));g.classList.add('act');
        panel.innerHTML=`<b>Box ${i+1}</b>: what is this?`;
        if(s.done){const r=document.createElement('div');r.className='exp';r.textContent=s.pick===p[4]?'Correct: '+p[4]:`You chose ${s.pick}. Correct answer: ${p[4]}`;panel.appendChild(r);return}
        s.opts.forEach(o=>{const b=document.createElement('button');b.className='opt';b.textContent=o;
          b.onclick=()=>{if(s.done)return;s.done=true;s.pick=o;ans++;const right=o===p[4];if(right)got++;
            cur.l[lkey(di,i)]=o;save();
            g.classList.remove('act');g.classList.add(right?'ok':'no');
            panel.querySelectorAll('.opt').forEach(x=>{x.classList.add('lock');if(x.textContent===p[4])x.classList.add('ok')});
            if(!right)b.classList.add('no');
            const r=document.createElement('div');r.className='exp';r.textContent=right?'Correct.':'Correct answer: '+p[4];panel.appendChild(r);
            upd2();score()};
          panel.appendChild(b)});
      }));
      lab.appendChild(sec);io.observe(sec.querySelector('svg'));
    });
  }

  let labBuilt=false;
  function tab(m){
    if(!m&&!labBuilt){buildLab();labBuilt=true}
    box.classList.toggle('hide',!m);lab.classList.toggle('hide',m);
    $('#tM').classList.toggle('on',m);$('#tL').classList.toggle('on',!m);
    $('.tools').classList.toggle('hide',!m);$('.kb').classList.toggle('hide',!m);
    scrollTo(0,0);
  }
  $('#tM').onclick=()=>tab(true);$('#tL').onclick=()=>tab(false);

  /* finishing a test (restart or shuffle) archives its result into history */
  function restart(sh){
    const s=stats();
    upd(x=>{if(s.md+s.lg>0){x.hist.unshift({t:Date.now(),m:[s.mc,s.md],l:[s.lc,s.lg]});x.hist=x.hist.slice(0,50)}x.cur=null});
    cur=newCur(sh);save();buildMCQ();if(labBuilt)buildLab();scrollTo(0,0);
  }
  $('#shuf').onclick=()=>restart(true);$('#rst').onclick=()=>restart(false);

  /* keyboard: A-E / 1-5 answer the first visible unanswered question, N jumps to the next one */
  const curCard=()=>{const top=$('.hd').getBoundingClientRect().bottom;
    const cs=[...box.querySelectorAll('.card.mq:not(.done)')].filter(c=>!c.hidden);
    return cs.find(c=>c.getBoundingClientRect().bottom>top+40)||cs[0]};
  const mark=c=>{box.querySelectorAll('.cur').forEach(x=>x.classList.remove('cur'));c&&c.classList.add('cur')};
  document.addEventListener('keydown',e=>{
    if(e.ctrlKey||e.metaKey||e.altKey||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;
    if(!root.offsetParent||box.classList.contains('hide'))return;
    const key=e.key.toLowerCase();let i='abcde'.indexOf(key);if(i<0)i='12345'.indexOf(key);
    if(key==='n'){const c=curCard();mark(c);c&&c.scrollIntoView({block:'center',behavior:'smooth'});return}
    if(i<0)return;
    const c=curCard(),b=c&&c.querySelectorAll('.opt')[i];if(!b)return;
    e.preventDefault();b.click();
    const nx=curCard();mark(nx);nx&&nx.scrollIntoView({block:'center',behavior:'smooth'});
  });

  buildMCQ();
}

/* review page: every question missed at any time, plus past results */
function review(root){
  root.classList.add('ql');
  const d=ld();
  const ids=Object.keys(d.miss).filter(id=>BYID[id]).sort((a,b)=>d.miss[b]-d.miss[a]);
  root.innerHTML=`<h2>Review</h2><p class="lead" id="rl"></p><div id="rv"></div><h3 class="hh">History</h3><div id="hs"></div>`;
  const rv=root.querySelector('#rv'),rl=root.querySelector('#rl');
  const count=()=>{const n=rv.querySelectorAll('.card').length;rl.textContent=n?`${n} missed question${n>1?'s':''}. Answer again: when you get one right you can remove it or keep it.`:'';
    if(!n&&!rv.querySelector('.empty')){rl.textContent='';rv.innerHTML='<p class="empty">Nothing to review. Questions you get wrong in the quiz will appear here.</p>'}};
  const mk=id=>{const q=BYID[id];
    return mcqCard(q,`Missed ${ld().miss[id]||1}× · ${q.t}`,{onAnswer:(r,t,c)=>{
      const bar=document.createElement('div');bar.className='act';
      if(r)bar.innerHTML='<button data-a="rm">Remove from review</button><button data-a="keep">Keep</button>';
      else{upd(x=>{x.miss[id]=(x.miss[id]||0)+1});bar.innerHTML='<button data-a="retry">Try again</button>'}
      c.appendChild(bar);
      bar.onclick=ev=>{const a=ev.target.dataset.a;if(!a)return;
        if(a==='rm'){upd(x=>{delete x.miss[id]});c.remove();count()}
        else if(a==='keep')bar.remove();
        else c.replaceWith(mk(id))};
    }})};
  ids.forEach(id=>rv.appendChild(mk(id)));count();
  const hs=root.querySelector('#hs'),fmt=t=>new Date(t).toLocaleString([],{dateStyle:'medium',timeStyle:'short'});
  const pc=(c,n)=>n?Math.round(c/n*100)+'%':'-';
  let h='';
  if(d.cur){let md=0,mc=0;for(const id in d.cur.a||{})if(BYID[id]){md++;if(d.cur.a[id]===BYID[id].a)mc++}
    const lg=Object.keys(d.cur.l||{}).length;if(md+lg)h+=`<div class="hrow"><span><b>In progress</b> · ${fmt(d.cur.t||Date.now())}</span><span>MCQ ${mc}/${md} (${pc(mc,md)}) · Labelling ${lg} answered</span></div>`}
  d.hist.forEach(r=>{if(r.ex){h+=`<div class="hrow"><span>${fmt(r.t)} · <b>Exam</b> · ${r.kind}</span><span>${r.c}/${r.n} (${pc(r.c,r.n)}) · ${r.tm}${r.why?' · auto-submitted':''}</span></div>`;return}h+=`<div class="hrow"><span>${fmt(r.t)}</span><span>MCQ ${r.m[0]}/${r.m[1]} (${pc(r.m[0],r.m[1])}) · Labelling ${r.l[0]}/${r.l[1]} (${pc(r.l[0],r.l[1])})</span></div>`});
  hs.innerHTML=h||'<p class="empty">No finished tests yet. Press "Finish &amp; restart" in the quiz to save a result here.</p>';
  if(d.hist.length){const b=document.createElement('button');b.className='clr';b.textContent='Clear history';b.onclick=()=>{upd(x=>{x.hist=[]});review(root)};hs.appendChild(b)}
}

window.ULQuiz={mount:mount,review:review,data:{ALL:ALL,L:L,shuffle:shuffle,upd:upd}};
})();
