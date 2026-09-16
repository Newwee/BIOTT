/**
 * immune.js
 * ข้อมูลสรุปเนื้อหาและคลังข้อสอบสำหรับบทเรียน: ระบบภูมิคุ้มกัน (Immune System)
 * อ้างอิงจาก IMMUNE SYSTEM.pdf และแนวข้อสอบปลายภาค
 */

window.immuneData = {
  id: "immune",
  title: "ระบบภูมิคุ้มกัน (Immune System)",
  icon: "🛡️",
  description: "ศึกษาด่านป้องกันของร่างกาย เซลล์เม็ดเลือดขาว กระบวนการอักเสบ กลไกของ B cell, T cell, แอนติบอดี และระบบภูมิคุ้มกันแบบจำเพาะและไม่จำเพาะ",
  
  // สรุปเนื้อหาแบ่งตามหัวข้อย่อย
  summaryContent: [
    {
      title: "1. ภาพรวมและการจดจำสิ่งแปลกปลอม (Overview & Pathogen Recognition)",
      badge: "พื้นฐานสำคัญ",
      content: `
        <p><strong>ระบบภูมิคุ้มกัน (Immune System)</strong> ทำหน้าที่ปกป้องร่างกายจากเชื้อก่อโรค (Pathogens) เช่น แบคทีเรีย ไวรัส เชื้อรา และพยาธิ โดยเซลล์ภูมิคุ้มกันจะตรวจจับและทำลายสิ่งแปลกปลอม</p>
        
        <div class="summary-subcard">
          <h4>🔬 การจดจำเชื้อโรค (How Immune Cells Recognize Pathogens)</h4>
          <ul>
            <li><strong>Innate Recognition (การจดจำแบบไม่จำเพาะ):</strong> เซลล์ภูมิคุ้มกันใช้ตัวรับจำนวนไม่มาก ตรวจจับโครงสร้างโมเลกุลที่พบร่วมกันในกลุ่มจุลชีพก่อโรค แต่ไม่พบในเซลล์สัตว์ เช่น:
              <ul>
                <li><strong>dsRNA (double-stranded RNA):</strong> จีโนมของไวรัสบางชนิด</li>
                <li><strong>Flagellin:</strong> โปรตีนแฟลกเจลลัมของแบคทีเรีย</li>
                <li><strong>Mannan:</strong> โอลิโกแซ็กคาไรด์บนผนังเซลล์ของเชื้อรา</li>
              </ul>
            </li>
            <li><strong>Adaptive Recognition (การจดจำแบบจำเพาะ):</strong> เซลล์ลิมโฟไซต์ใช้ตัวรับที่มีความหลากหลายมหาศาล จดจำส่วนเฉพาะเจาะจงของโปรตีนแปลกปลอม (Epitope) โดยแยกความแตกต่างได้แม้ลำดับกรดอะมิโนต่างกันเพียงตำแหน่งเดียว เช่น การแยกสายพันธุ์ไวรัสไข้หวัดใหญ่ (Influenza strains)</li>
          </ul>
        </div>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <div>
            <strong>ไส้ติ่ง (Appendix) กับระบบภูมิคุ้มกัน:</strong>
            <p>ไส้ติ่งมีเนื้อเยื่อน้ำเหลืองและทำหน้าที่เป็นแหล่งสะสมของแบคทีเรียประจำถิ่นที่เป็นมิตร (Safe house for gut commensal microbiome) ช่วยฟื้นฟูสมดุลจุลินทรีย์ในลำไส้หลังการติดเชื้อท้องเสีย</p>
          </div>
        </div>
      `
    },
    {
      title: "2. ส่วนประกอบของเลือดและเซลล์เม็ดเลือดขาว (Blood Components & WBCs)",
      badge: "เซลล์ภูมิคุ้มกัน",
      content: `
        <p>เลือดประกอบด้วย 2 ส่วนหลัก:</p>
        <ul>
          <li><strong>พลาสมา (Plasma 55%):</strong> น้ำ 90%, โปรตีนในพลาสมา (Albumin รักษาแรงดันออสโมติก, Immunoglobulins เป็นแอนติบอดี, Fibrinogen ช่วยการแข็งตัวของเลือด), อิเล็กโทรไลต์, สารอาหาร และของเสีย</li>
          <li><strong>เม็ดเลือดและเกล็ดเลือด (Cellular elements 45%):</strong> เม็ดเลือดแดง (Erythrocytes), เกล็ดเลือด (Platelets), เม็ดเลือดขาว (Leukocytes 5,000–10,000 เซลล์/ลบ.มม.)</li>
        </ul>

        <div class="summary-subcard">
          <h4>🩸 ชนิดของเซลล์เม็ดเลือดขาว (Types of White Blood Cells)</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>กลุ่ม</th>
                <th>ชนิดเซลล์</th>
                <th>ลักษณะนิวเคลียส/แกรนูล</th>
                <th>หน้าที่หลัก</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="3"><strong>Granulocytes</strong><br>(มีแกรนูลย้อมติดสี)</td>
                <td><strong>Neutrophil</strong></td>
                <td>นิวเคลียสหลายพู (Multilobed 3-5 พู), แกรนูลละเอียด</td>
                <td>ทำลายแบคทีเรียด้วย Phagocytosis เป็นทัพหน้าสุดเมื่อเกิดการติดเชื้อ (พบบ่อยสุดในเลือด ~60-70%)</td>
              </tr>
              <tr>
                <td><strong>Eosinophil</strong></td>
                <td>นิวเคลียส 2 พู (Bilobed), แกรนูลกลมใหญ่ติดสีส้มแดงของ Eosin</td>
                <td>ทำลายพยาธิ ปรสิต และมีบทบาทควบคุมอาการแพ้</td>
              </tr>
              <tr>
                <td><strong>Basophil</strong></td>
                <td>นิวเคลียส 2 พู มักถูกบดบังด้วยแกรนูลสีน้ำเงินเข้ม (Methylene blue)</td>
                <td>หลั่ง Histamine, Heparin และ Leukotriene (LTC4) กระตุ้นการอักเสบและอาการแพ้</td>
              </tr>
              <tr>
                <td rowspan="2"><strong>Agranulocytes</strong><br>(ไม่มีแกรนูลจำเพาะ)</td>
                <td><strong>Monocyte</strong></td>
                <td>เซลล์ขนาดใหญ่ที่สุด นิวเคลียสรูปเกือกม้า/ไต</td>
                <td>ออกจากหลอดเลือดพัฒนาเป็น <em>Macrophage</em> กลืนกินสิ่งแปลกปลอมขนาดใหญ่ และเป็นเซลล์นำเสนอแอนติเจน (APC)</td>
              </tr>
              <tr>
                <td><strong>Lymphocyte</strong></td>
                <td>นิวเคลียสกลมใหญ่เกือบเต็มเซลล์ ไซโทพลาซึมบาง</td>
                <td>สร้างภูมิคุ้มกันแบบจำเพาะ ประกอบด้วย B cell (Humoral), T cell (Cell-mediated) และ Natural Killer (NK) cell</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "3. ด่านป้องกันของร่างกายทั้ง 3 ด่าน (Three Lines of Defense)",
      badge: "กลไกป้องกัน",
      content: `
        <div class="summary-subcard">
          <h4>🛡️ ด่านที่ 1: ด่านป้องกันภายนอกทางกายภาพและเคมี (First Line of Defense)</h4>
          <p>จัดเป็น <strong>Innate Immunity</strong> ป้องกันไม่ให้เชื้อโรคเข้าสู่ร่างกาย:</p>
          <ul>
            <li><strong>ผิวหนัง (Intact skin):</strong> เป็นเกราะป้องกันทางกายภาพ มีเคราติน และสารคัดหลั่งจากต่อมเหงื่อ/ต่อมไขมันที่มีฤทธิ์เป็นกรดอ่อนยับยั้งเชื้อราและแบคทีเรีย</li>
            <li><strong>เยื่อบุผิวและเมือก (Mucous membranes & Mucus):</strong> ดักจับเชื้อโรคในทางเดินหายใจ ทางเดินอาหาร ทางเดินปัสสาวะ</li>
            <li><strong>ซิเลีย (Cilia):</strong> พัดโบกเมือกและสิ่งแปลกปลอมออกจากหลอดลม</li>
            <li><strong>สารคัดหลั่งที่มีเอนไซม์ Lysozyme:</strong> น้ำตา น้ำลาย น้ำมูก ย่อยสลายผนังเซลล์เปปทิโดไกลแคนของแบคทีเรีย</li>
            <li><strong>กรดในกระเพาะอาหาร (Stomach Acid / HCl, pH 1.5-2.0):</strong> ทำลายเชื้อโรคที่ปนเปื้อนมากับอาหาร</li>
            <li><strong>แบคทีเรียประจำถิ่น (Commensal microflora):</strong> แย่งพื้นที่และอาหาร ยับยั้งการเจริญของเชื้อก่อโรค</li>
          </ul>
        </div>

        <div class="summary-subcard">
          <h4>⚔️ ด่านที่ 2: ด่านป้องกันภายในแบบไม่จำเพาะ (Second Line of Defense)</h4>
          <p>เมื่อเชื้อโรคผ่านด่านแรกเข้ามาได้ ร่างกายจะต่อต้านทันทีแบบ <strong>Non-specific Innate Response</strong>:</p>
          <ul>
            <li><strong>เซลล์กลืนกิน (Phagocytic cells):</strong> Neutrophil, Macrophage, Dendritic cell ทำลายเชื้อด้วยกระบวนการ <em>Phagocytosis</em></li>
            <li><strong>Natural Killer (NK) cells:</strong> ทำลายเซลล์ที่ติดเชื้อไวรัสและเซลล์มะเร็ง โดยปล่อยสารทำให้เซลล์เป้าหมายเกิด Apoptosis</li>
            <li><strong>โปรตีนต่อต้านจุลชีพ (Antimicrobial proteins):</strong>
              <ul>
                <li><strong>Complement system:</strong> โปรตีนในพลาสมาที่กระตุ้นเป็นลูกโซ่ ทำให้เกิดรูบนเยื่อหุ้มเซลล์ของเชื้อโรค (Cell lysis) และช่วยดึงดูดเม็ดเลือดขาว (Opsonization)</li>
                <li><strong>Interferon:</strong> สารที่เซลล์ติดเชื้อไวรัสสร้างขึ้นเพื่อเตือนเซลล์ข้างเคียงให้สร้างโปรตีนยับยั้งการแบ่งตัวของไวรัส</li>
              </ul>
            </li>
            <li><strong>กระบวนการอักเสบ (Inflammatory response):</strong> ปฏิกิริยาเฉพาะที่เพื่อจำกัดและทำลายเชื้อโรค</li>
            <li><strong>ไข้ (Fever):</strong> การเพิ่มอุณหภูมิร่างกาย ยับยั้งการเติบโตของเชื้อจุลินทรีย์บางชนิด และกระตุ้นการทำงานของเซลล์ภูมิคุ้มกัน</li>
          </ul>
        </div>

        <div class="summary-subcard">
          <h4>🎯 ด่านที่ 3: ระบบภูมิคุ้มกันแบบจำเพาะ (Third Line of Defense / Adaptive Immunity)</h4>
          <ul>
            <li>มีความจำเพาะสูงต่อแอนติเจน (Antigen-specific)</li>
            <li>มีเซลล์จดจำ (Immunological Memory) ทำให้เมื่อสัมผัสเชื้อซ้ำจะตอบสนองได้รวดเร็วและรุนแรงขึ้นมาก</li>
            <li>ประกอบด้วย <strong>B lymphocytes (สร้าง Antibodies)</strong> และ <strong>T lymphocytes (เซลล์ทำลายและเซลล์ผู้ช่วย)</strong></li>
          </ul>
        </div>
      `
    },
    {
      title: "4. กระบวนการกลืนกินของเซลล์ (Phagocytosis Mechanism)",
      badge: "กลไกเซลล์",
      content: `
        <p>Phagocytosis คือกระบวนการที่เซลล์กลืนกิน (Phagocyte เช่น Neutrophil, Macrophage) ล้อมและย่อยสลายสิ่งแปลกปลอม มี 6 ขั้นตอนตามลำดับ:</p>
        <ol class="step-list">
          <li><strong>Chemotaxis & Recognition:</strong> เคลื่อนที่เข้าหาสารเคมีจากเชื้อโรค และตรวจจับสิ่งแปลกปลอม</li>
          <li><strong>Pseudopodia surrounding:</strong> ยื่นเท้าเทียม (Pseudopodia) โอบล้อมเชื้อก่อโรค</li>
          <li><strong>Endocytosis & Vacuole formation:</strong> ดึงเชื้อเข้าสู่เซลล์ เกิดเป็นถุงเวสิเคิลที่เรียกว่า <strong>Phagosome</strong> (หรือ Vacuole)</li>
          <li><strong>Phagolysosome fusion:</strong> ถุง Phagosome เคลื่อนมารวมตัวกับ <strong>Lysosome</strong> ที่บรรจุเอนไซม์ย่อยสลาย (Hydrolytic enzymes) กลายเป็น <em>Phagolysosome</em></li>
          <li><strong>Digestion & Killing:</strong> เอนไซม์และสารพิษ (Toxic reactive oxygen species / Nitric oxide) ทำลายและย่อยชิ้นส่วนเชื้อโรค</li>
          <li><strong>Exocytosis:</strong> กากและเศษซากของเชื้อโรคจะถูกขับออกจากเซลล์โดยกระบวนการเอกโซไซโทซิส (Exocytosis) ส่วน Macrophage จะนำชิ้นส่วนแอนติเจนไปจัดแสดงบนเยื่อหุ้มเซลล์ร่วมกับโมเลกุล MHC-II</li>
        </ol>
      `
    },
    {
      title: "5. กระบวนการอักเสบและอาการภูมิแพ้ (Inflammation vs Allergy)",
      badge: "ปฏิกิริยาสำคัญ",
      content: `
        <div class="summary-subcard">
          <h4>🔥 กระบวนการอักเสบ (Inflammatory Response)</h4>
          <p>เกิดขึ้นเมื่อเนื้อเยื่อได้รับบาดเจ็บหรือติดเชื้อ มี 4 อาการสำคัญ (Cardinal Signs): <strong>ปวด (Pain), บวม (Swelling), แดง (Redness), ร้อน (Warmth)</strong></p>
          <ul>
            <li>เนื้อเยื่อบาดเจ็บกระตุ้น <strong>Mast cells</strong> และ Basophils ให้หลั่ง <strong>Histamine</strong></li>
            <li>ฮิสตามีนทำให้หลอดเลือดฝอยขยายตัว (Vasodilation) และเพิ่มการซึมผ่านของผนังหลอดเลือด (Capillary permeability) ทำให้พลาสมาไหลออกมายังเนื้อเยื่อ ส่งผลให้เกิดอาการบวมและแดง</li>
            <li>เม็ดเลือดขาว (Neutrophils และ Macrophages) แทรกตัวผ่านผนังหลอดเลือด (Diapedesis / Extravasation) เข้ามาเก็บกินเชื้อโรค</li>
            <li>เซลล์เม็ดเลือดขาวและเกล็ดเลือดหลั่ง Growth factor เพื่อเริ่มกระบวนการซ่อมแซมบาดแผล</li>
          </ul>
        </div>

        <div class="summary-subcard">
          <h4>🤧 กลไกการเกิดอาการแพ้ (Allergic Reaction)</h4>
          <ul>
            <li><strong>การสัมผัสครั้งแรก (Sensitization):</strong> สารก่อภูมิแพ้ (Allergen เช่น ละอองเกสร) กระตุ้น B cell ให้เปลี่ยนเป็น Plasma cell หลั่งแอนติบอดีชนิด <strong>IgE</strong> ซึ่งจะไปจับกับตัวรับบนผิวของ <strong>Mast cells</strong> และ Basophils</li>
            <li><strong>การสัมผัสครั้งถัดไป (Secondary Exposure):</strong> สารก่อภูมิแพ้เข้าจับกับแขนของ IgE บน Mast cell ทำให้เกิดการเชื่อมขวาง (Cross-linking) ส่งผลให้แกรนูลแตกตัว (Degranulation) หลั่ง <strong>Histamine</strong> และ <strong>Leukotriene C4 (LTC4)</strong> ออกมาอย่างรวดเร็ว ก่อให้เกิดอาการแพ้ เช่น คัน จาม แน่นหน้าอก หายใจลำบาก หรือรุนแรงถึงขั้น Anaphylactic shock</li>
          </ul>
        </div>

        <div class="tip-box">
          <span class="tip-icon">⚖️</span>
          <div>
            <strong>ตารางเปรียบเทียบการอักเสบ (Inflammation) กับ การแพ้ (Allergy):</strong>
            <ul>
              <li><strong>การอักเสบ:</strong> เซลล์หลักคือ Neutrophil, Macrophage, TH1 | แอนติบอดี IgM, IgG | ไซโตไคน์ IL-1, IL-2, IL-6, TNF-&alpha; | พรอสตาแกลนดิน PGE2 | ลิวโคไตรอีน LTB4</li>
              <li><strong>อาการแพ้:</strong> เซลล์หลักคือ Mast cell, Basophil, Eosinophil, TH2 | แอนติบอดี <strong>IgE</strong> | ไซโตไคน์ IL-4, IL-5, IL-9, IL-13 | พรอสตาแกลนดิน PGD2 | ลิวโคไตรอีน <strong>LTC4</strong>, LTD4, LTE4</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "6. แอนติบอดีและโครงสร้าง (Antibody Structure & 5 Classes of Igs)",
      badge: "อิมมูโนโกลบูลิน",
      content: `
        <div class="summary-subcard">
          <h4>🧬 โครงสร้างของแอนติบอดี (Antibody Structure)</h4>
          <p>แอนติบอดีเป็นโปรตีนรูปตัว <strong>Y</strong> ประกอบด้วยสายพอลิเพปไทด์ 4 สาย เชื่อมกันด้วย <strong>พันธะไดซัลไฟด์ (Disulfide bridge)</strong>:</p>
          <ul>
            <li><strong>Heavy chains (สายหนัก) 2 สาย:</strong> ขนาดใหญ่และเหมือนกันทุกประการ</li>
            <li><strong>Light chains (สายเบา) 2 สาย:</strong> ขนาดเล็กและเหมือนกันทุกประการ</li>
            <li><strong>Variable region (บริเวณผันแปร):</strong> อยู่ที่ปลายกิ่งรูปตัว Y ทำหน้าที่เป็น <em>Antigen-binding site</em> จับกับ Epitope ของแอนติเจนอย่างจำเพาะเจาะจงสูงมาก</li>
            <li><strong>Constant region (บริเวณคงที่):</strong> อยู่ที่ส่วนลำตัว (Fc region) กำหนดคลาสและกลไกการทำงานทางชีวภาพของแอนติบอดี</li>
          </ul>
        </div>

        <div class="summary-subcard">
          <h4>📚 คลาสของแอนติบอดี 5 ชนิด (Immunoglobulins: GAMED)</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>ชนิด</th>
                <th>โครงสร้าง</th>
                <th>ร้อยละ</th>
                <th>คุณสมบัติเด่นและหน้าที่</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IgG</strong></td>
                <td>Monomer</td>
                <td>~80% (พบมากที่สุดในเลือด)</td>
                <td>ป้องกันไวรัส แบคทีเรีย สารพิษ เป็นชนิดเดียวที่<strong>สามารถผ่านรกจากแม่สู่ทารกได้</strong> ให้ภูมิคุ้มกันทารกแรกเกิด</td>
              </tr>
              <tr>
                <td><strong>IgA</strong></td>
                <td>Dimer (มักมี Secretory component)</td>
                <td>~10-15%</td>
                <td>พบเด่นใน<strong>สารคัดหลั่งภายนอก</strong> (น้ำตา น้ำลาย เมือก น้ำนมแรก/Colostrum) ดักจับเชื้อโรคก่อนเข้าสู่เนื้อเยื่อ</td>
              </tr>
              <tr>
                <td><strong>IgM</strong></td>
                <td>Pentamer (มี 5 หน่วย 10 แขนจับ)</td>
                <td>~5-10%</td>
                <td>เป็นแอนติบอดีชนิดแรกที่สร้างขึ้นเมื่อสัมผัสเชื้อโรคครั้งแรก (Primary response) เกาะกลุ่มเชื้อโรคได้ดีมาก (Agglutination) และเป็น Isohemagglutinin (Anti-A, Anti-B ในระบบเลือด ABO)</td>
              </tr>
              <tr>
                <td><strong>IgE</strong></td>
                <td>Monomer</td>
                <td>< 1% (น้อยที่สุด)</td>
                <td>จับบนผิวของ Mast cell และ Basophil เกี่ยวข้องกับ<strong>ปฏิกิริยาภูมิแพ้</strong>และการกำจัดพยาธิ</td>
              </tr>
              <tr>
                <td><strong>IgD</strong></td>
                <td>Monomer</td>
                <td>< 1%</td>
                <td>อยู่บนเยื่อหุ้มเซลล์ของ B cell ทำหน้าที่เป็น B cell receptor (BCR) ช่วยในการกระตุ้นและส่งสัญญาณให้ B cell</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "7. กลไกเซลล์ลิมโฟไซต์และ MHC (B cells, T cells & MHC)",
      badge: "ระบบจำเพาะ",
      content: `
        <div class="summary-subcard">
          <h4>🧪 การคัดเลือกโคลน (Clonal Selection Theory)</h4>
          <p>เมื่อแอนติเจนจับกับ B cell หรือ T cell ที่มีตัวรับจำเพาะกับแอนติเจนนั้น เซลล์นั้นจะถูกกระตุ้นให้แบ่งตัวอย่างรวดเร็ว (Proliferation) กลายเป็นกลุ่มเซลล์พันธุกรรมเดียวกัน (Clone) แล้วพัฒนาไปเป็น 2 กลุ่ม:</p>
          <ul>
            <li><strong>Effector cells:</strong> เช่น <em>Plasma cells</em> ที่หลั่งแอนติบอดีนับพันโมเลกุลต่อวินาที หรือ Active cytotoxic T cells</li>
            <li><strong>Memory cells:</strong> เซลล์ที่มีอายุยืนยาว จดจำแอนติเจนเดิมไว้ เพื่อตอบสนองอย่างรวดเร็วหากได้รับเชื้อซ้ำ</li>
          </ul>
        </div>

        <div class="summary-subcard">
          <h4>🛡️ บทบาทของ T Cells และโมเลกุล MHC</h4>
          <p>T cell receptor (TCR) ประกอบด้วยสายพอลิเพปไทด์ 2 สาย คือ &alpha; chain และ &beta; chain เชื่อมด้วยพันธะไดซัลไฟด์ และต้องจับกับแอนติเจนที่นำเสนอบนโมเลกุล <strong>MHC (Major Histocompatibility Complex)</strong> เท่านั้น:</p>
          <ul>
            <li><strong>MHC Class I:</strong> พบในเซลล์ร่างกายที่มีนิวเคลียสทุกเซลล์ นำเสนอเปปไทด์ที่สร้างขึ้น <em>ภายในเซลล์ (Endogenous antigens)</em> เช่น ชิ้นส่วนโปรตีนไวรัสหรือโปรตีนเซลล์มะเร็ง ให้แก่ <strong>Cytotoxic T cells (CD8+)</strong>
              <br>👉 CD8+ T cell จะหลั่ง <strong>Perforin</strong> เจาะรูที่เยื่อหุ้มเซลล์ และหลั่ง <strong>Granzymes</strong> กระตุ้นให้เซลล์เป้าหมายตายแบบ Apoptosis
            </li>
            <li><strong>MHC Class II:</strong> พบเฉพาะบนเซลล์นำเสนอแอนติเจน (Antigen-Presenting Cells: APCs เช่น Macrophages, Dendritic cells, B cells) นำเสนอโปรตีนที่กลืนกินจาก <em>ภายนอกเซลล์ (Exogenous antigens)</em> ให้แก่ <strong>Helper T cells (CD4+)</strong>
              <br>👉 CD4+ T cell จะหลั่ง <strong>Cytokines</strong> ไปกระตุ้นทั้ง B cells ให้สร้างแอนติบอดี และกระตุ้น Cytotoxic T cells ให้ทำงาน
            </li>
          </ul>
        </div>
      `
    },
    {
      title: "8. ภูมิคุ้มกันก่อเอง vs รับมา และกราฟการตอบสนอง (Immunity Types & Memory)",
      badge: "การนำไปใช้ & ข้อสอบ",
      content: `
        <div class="summary-subcard">
          <h4>📈 กราฟการตอบสนองทางภูมิคุ้มกัน (Immunological Memory Graph)</h4>
          <ul>
            <li><strong>Primary Immune Response (การตอบสนองปฐมภูมิ):</strong> เมื่อร่างกายสัมผัสแอนติเจนครั้งแรก ใช้เวลาช้า (พีคที่ประมาณ 10–17 วัน) ปริมาณแอนติบอดีต่ำ และแอนติบอดีตัวแรกที่สร้างคือ IgM แล้วตามด้วย IgG</li>
            <li><strong>Secondary Immune Response (การตอบสนองทุติยภูมิ):</strong> เมื่อสัมผัสแอนติเจนเดิมซ้ำอีกครั้ง เซลล์ความจำ (Memory cells) จะตอบสนองทันที ใช้เวลารวดเร็วมาก (พีคเพียง 2–7 วัน) ปริมาณแอนติบอดีสูงกว่ามาก (ส่วนใหญ่เป็น IgG) และคงอยู่ได้ยาวนานกว่ามาก</li>
          </ul>
        </div>

        <div class="summary-subcard">
          <h4>💉 การเปรียบเทียบประเภทภูมิคุ้มกัน (Active vs Passive Immunity)</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>ประเภท</th>
                <th>กลไก</th>
                <th>ระยะเวลาการออกฤทธิ์</th>
                <th>การสร้าง Memory cell</th>
                <th>ตัวอย่าง</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ภูมิคุ้มกันก่อเอง<br>(Active Immunity)</strong></td>
                <td>ร่างกายได้รับแอนติเจน แล้วระบบภูมิคุ้มกันของร่างกายสร้างแอนติบอดีขึ้นเอง</td>
                <td>ออกฤทธิ์ช้า (ต้องใช้เวลา 1-2 สัปดาห์) แต่ป้องกันได้<strong>ระยะยาวนานเป็นปีหรือตลอดชีวิต</strong></td>
                <td><strong>มี</strong> เซลล์ความจำ</td>
                <td>
                  - ตามธรรมชาติ: การหายจากโรคติดเชื้อ (เช่น โรคหัด อีสุกอีใส)<br>
                  - ปรุงแต่ง: <strong>วัคซีน (Vaccine)</strong>, ท็อกซอยด์ (Toxoid เช่น บาดทะยัก คอตีบ)
                </td>
              </tr>
              <tr>
                <td><strong>ภูมิคุ้มกันรับมา<br>(Passive Immunity)</strong></td>
                <td>ร่างกายได้รับแอนติบอดีที่พร้อมใช้งานโดยตรงจากภายนอก ร่างกายไม่ได้สร้างเอง</td>
                <td>ออกฤทธิ์<strong>ทันทีทันใด</strong> แต่ป้องกันได้<strong>ระยะสั้น (ไม่กี่สัปดาห์หรือเดือน)</strong> เพราะแอนติบอดีจะสลายตัวไป</td>
                <td><strong>ไม่มี</strong> เซลล์ความจำ</td>
                <td>
                  - ตามธรรมชาติ: แอนติบอดี IgG ผ่านรก, IgA ในน้ำนมแม่<br>
                  - ปรุงแต่ง: <strong>ซีรั่ม (Serum)</strong>, เซรุ่มแก้พิษงู (Antivenom), เซรุ่มพิษสุนัขบ้า, แอนติท็อกซิน
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],

  // คลังข้อสอบ 36 ข้อพร้อมเฉลยละเอียด
  questionBank: [
    {
      id: 1,
      question: "ข้อใดกล่าวถึงกลไกการจดจำเชื้อโรคของ Innate immunity และ Adaptive immunity ได้ถูกต้องที่สุด?",
      options: [
        "Innate immunity ใช้ตัวรับที่หลากหลายแยกแยะชนิดของเชื้อโรคได้จำเพาะเจาะจงมากกว่า Adaptive immunity",
        "Innate immunity ตรวจจับโครงสร้างโมเลกุลร่วมที่พบในเชื้อโรค เช่น dsRNA ของไวรัส หรือ Flagellin ของแบคทีเรีย",
        "Adaptive immunity ไม่สามารถแยกแยะสายพันธุ์ไวรัสที่ต่างกันของกรดอะมิโนได้",
        "Innate immunity มีระบบเซลล์จดจำ (Memory cells) ทำให้เมื่อติดเชื้อซ้ำจะตอบสนองรวดเร็วกว่า"
      ],
      answer: 1,
      explanation: "Innate immunity (ภูมิคุ้มกันแบบไม่จำเพาะ) ใช้ตัวรับตรวจจับโมเลกุลร่วมที่เชื้อก่อโรคสร้างแต่ไม่พบในสัตว์ เช่น dsRNA (ไวรัส), Flagellin (แบคทีเรีย) และ Mannan (เชื้อรา) ในขณะที่ Adaptive immunity มีความจำเพาะสูงมาก สามารถแยกแยะสายพันธุ์ไวรัสที่ต่างกันเพียงกรดอะมิโนตำแหน่งเดียวได้"
    },
    {
      id: 2,
      question: "โครงสร้างใดของร่างกายจัดอยู่ในด่านป้องกันด่านแรก (First line of defense)?",
      options: [
        "Natural killer cell และ Phagocyte",
        "การเกิดปฏิกิริยาอักเสบและการมีไข้",
        "ผิวหนัง น้ำตาที่มีเอนไซม์ไลโซไซม์ และกรดในกระเพาะอาหาร",
        "บีลิมโฟไซต์ ทีลิมโฟไซต์ และแอนติบอดี"
      ],
      answer: 2,
      explanation: "ด่านแรก (First line of defense) คือเกราะป้องกันทางกายภาพและเคมี เช่น ผิวหนัง เยื่อเมือก ซิเลีย น้ำตา/น้ำลายที่มีไลโซไซม์ และกรดไฮโดรคลอริกในกระเพาะอาหาร ส่วน phagocyte และการอักเสบเป็นด่านที่ 2 และ B/T cell เป็นด่านที่ 3"
    },
    {
      id: 3,
      question: "เซลล์เม็ดเลือดขาวชนิดใดมีจำนวนมากที่สุดในกระแสเลือดของมนุษย์ปกติ และทำหน้าที่เป็นทัพหน้าในการกลืนกินเชื้อแบคทีเรีย?",
      options: [
        "Neutrophil",
        "Basophil",
        "Eosinophil",
        "Monocyte"
      ],
      answer: 0,
      explanation: "Neutrophil เป็นเซลล์เม็ดเลือดขาวชนิดแกรนูโลไซต์ที่มีจำนวนมากที่สุดในเลือด (ประมาณ 60-70%) นิวเคลียสมี 3-5 พู ทำหน้าที่เป็นเซลล์กลุ่มแรกที่เคลื่อนตัวไปยังตำแหน่งติดเชื้อเพื่อทำลายแบคทีเรียด้วยวิธี phagocytosis"
    },
    {
      id: 4,
      question: "ผู้ป่วยที่ตรวจพบว่ามีพยาธิในทางเดินอาหาร จะพบเซลล์เม็ดเลือดขาวชนิดใดเพิ่มสูงขึ้นอย่างชัดเจน?",
      options: [
        "Basophil",
        "Eosinophil",
        "Monocyte",
        "Neutrophil"
      ],
      answer: 1,
      explanation: "Eosinophil มีนิวเคลียส 2 พู แกรนูลย้อมติดสีส้มแดง ทำหน้าที่ปล่อยสารเคมีและเอนไซม์ทำลายพยาธิขนาดใหญ่ที่เซลล์เม็ดเลือดขาวไม่สามารถกลืนกินได้ทั้งตัว และมีบทบาทในปฏิกิริยาภูมิแพ้"
    },
    {
      id: 5,
      question: "สารใดที่หลั่งจาก Basophil และ Mast cell ซึ่งมีบทบาทสำคัญในการทำให้หลอดเลือดขยายตัวและเกิดการบวมแดงในปฏิกิริยาการอักเสบ?",
      options: [
        "Antibody IgG",
        "Lysozyme",
        "Histamine",
        "Perforin"
      ],
      answer: 2,
      explanation: "Histamine เป็นสารสื่อกลางที่หลั่งจากแกรนูลของ Mast cell และ Basophil ทำให้หลอดเลือดฝอยขยายตัว (vasodilation) และผนังหลอดเลือดเพิ่มการซึมผ่าน (increased permeability) ของเหลวและเม็ดเลือดขาวจึงซึมออกสู่เนื้อเยื่อ ทำให้เกิดอาการบวม แดง และร้อน"
    },
    {
      id: 6,
      question: "เมื่อเซลล์ Macrophage ทำการเขมือบเชื้อแบคทีเรียเข้าสู่เซลล์ ถุง Phagosome จะต้องหลอมรวมกับออร์แกเนลล์ใดเพื่อย่อยสลายเชื้อโรค?",
      options: [
        "Ribosome",
        "Endoplasmic reticulum",
        "Lysosome",
        "Golgi apparatus"
      ],
      answer: 2,
      explanation: "ถุง Phagosome ซึ่งกักขังเชื้อโรคไว้จะเคลื่อนที่มารวมกับ Lysosome กลายเป็นถุง Phagolysosome โดยเอนไซม์ไฮโดรเลสและสารออกซิไดซ์ภายในไลโซโซมจะทำหน้าที่ย่อยสลายและฆ่าเชื้อโรค"
    },
    {
      id: 7,
      question: "แอนติบอดี (Antibody) รูปตัว Y ประกอบด้วยสายพอลิเพปไทด์ชนิดใดและเชื่อมต่อกันด้วยพันธะเคมีชนิดใด?",
      options: [
        "1 สายหนัก 1 สายเบา เชื่อมด้วยพันธะไฮโดรเจน",
        "2 สายหนัก 2 สายเบา เชื่อมด้วยพันธะไดซัลไฟด์ (Disulfide bridge)",
        "4 สายหนัก เชื่อมด้วยพันธะเพปไทด์",
        "2 สายหนัก 2 สายเบา เชื่อมด้วยพันธะไอออนิก"
      ],
      answer: 1,
      explanation: "แอนติบอดีประกอบด้วย 4 สายพอลิเพปไทด์ ได้แก่ สายหนัก (Heavy chains) 2 สาย และสายเบา (Light chains) 2 สาย ยึดติดกันด้วยพันธะไดซัลไฟด์ (Disulfide bonds)"
    },
    {
      id: 8,
      question: "บริเวณใดของโมเลกุลแอนติบอดีที่ทำหน้าที่จับกับแอนติเจน (Antigen-binding site) อย่างจำเพาะเจาะจง?",
      options: [
        "Constant region ของ Heavy chain",
        "Constant region ของ Light chain",
        "Variable region บริเวณปลายของ Heavy chain และ Light chain",
        "Transmembrane region ที่ติดกับเยื่อหุ้มเซลล์"
      ],
      answer: 2,
      explanation: "Variable region (บริเวณผันแปร) ที่ปลายแขนรูปตัว Y ประกอบด้วยส่วนปลายของทั้ง Heavy chain และ Light chain ซึ่งมีลำดับกรดอะมิโนที่หลากหลายจำเพาะต่อการจับกับ Epitope ของแอนติเจน"
    },
    {
      id: 9,
      question: "แอนติบอดีชนิดใดสามารถผ่านรกจากแม่เข้าสู่กระแสเลือดของทารกในครรภ์ได้ และเป็นแอนติบอดีที่มีปริมาณมากที่สุดในซีรั่มของมนุษย์?",
      options: [
        "IgM",
        "IgG",
        "IgA",
        "IgE"
      ],
      answer: 1,
      explanation: "IgG เป็นแอนติบอดีที่มีสัดส่วนมากที่สุด (~80% ของอิมมูโนโกลบูลินในกระแสเลือด) และเป็นชนิดเดียวที่สามารถลำเลียงผ่านรก (Placenta) ได้ เพื่อให้ภูมิคุ้มกันแบบรับมาแก่ทารกแรกเกิด"
    },
    {
      id: 10,
      question: "แอนติบอดีชนิดใดที่พบมากที่สุดในสารคัดหลั่งของร่างกาย เช่น น้ำตา น้ำลาย น้ำมูก และน้ำนมแม่ (Colostrum)?",
      options: [
        "IgA",
        "IgD",
        "IgE",
        "IgM"
      ],
      answer: 0,
      explanation: "IgA พบมากในสารคัดหลั่งของร่างกาย มีโครงสร้างเป็นไดเมอร์ (Dimer) ทำหน้าที่ปกป้องเยื่อบุผิวตามช่องทางต่างๆ ป้องกันเชื้อโรคเกาะติดและแทรกซึมเข้าสู่เนื้อเยื่อชั้นใน"
    },
    {
      id: 11,
      question: "แอนติบอดีชนิดใดมีโครงสร้างแบบเพนทาเมอร์ (Pentamer) มี 10 แขนจับ และเป็นแอนติบอดีชนิดแรกที่ถูกสร้างขึ้นเมื่อร่างกายสัมผัสแอนติเจนครั้งแรก?",
      options: [
        "IgG",
        "IgA",
        "IgM",
        "IgD"
      ],
      answer: 2,
      explanation: "IgM ประกอบด้วยโมโนเมอร์ 5 หน่วยต่อกันเป็น Pentamer จึงมีถึง 10 ตำแหน่งในการจับแอนติเจน ทำให้ตกตะกอน (Agglutination) เชื้อโรคได้มีประสิทธิภาพสูงมาก และเป็นตัวแรกที่ตรวจพบในการตอบสนองปฐมภูมิ"
    },
    {
      id: 12,
      question: "แอนติบอดีชนิดใดที่มีบทบาทสำคัญที่สุดในปฏิกิริยาภูมิแพ้ (Allergy) โดยจะไปจับกับตัวรับบนผิวของ Mast cell และ Basophil?",
      options: [
        "IgE",
        "IgG",
        "IgM",
        "IgA"
      ],
      answer: 0,
      explanation: "IgE เกี่ยวข้องโดยตรงกับภาวะภูมิแพ้ เมื่อสารก่อภูมิแพ้จับกับ IgE บนผิว Mast cell/Basophil จะกระตุ้นให้เกิด Degranulation หลั่งสารฮิสตามีนและลิวโคไตรอีน (LTC4)"
    },
    {
      id: 13,
      question: "การที่เซลล์ลิมโฟไซต์ที่มีตัวรับจำเพาะกับแอนติเจนถูกคัดเลือกและกระตุ้นให้แบ่งเซลล์เพิ่มจำนวนนับพันเซลล์ เรียกว่าทฤษฎีใด?",
      options: [
        "Clonal selection theory",
        "Competitive inhibition",
        "Cell differentiation law",
        "Endosymbiosis theory"
      ],
      answer: 0,
      explanation: "ทฤษฎี Clonal Selection อธิบายว่าเมื่อแอนติเจนเข้าสู่ร่างกายจะคัดเลือกจับเฉพาะลิมโฟไซต์ที่มีตัวรับจำเพาะ ทำให้เซลล์นั้นได้รับการกระตุ้นให้แบ่งตัวสร้างโคลน (Clone) ของเซลล์ที่เหมือนกันจำนวนมากเพื่อกำจัดเชื้อ"
    },
    {
      id: 14,
      question: "เซลล์เม็ดเลือดขาวชนิดใดทำหน้าที่เปลี่ยนไปเป็น Plasma cell เพื่อสร้างและหลั่งแอนติบอดีออกมาในกระแสเลือด?",
      options: [
        "T helper cell",
        "B lymphocyte",
        "Cytotoxic T cell",
        "Monocyte"
      ],
      answer: 1,
      explanation: "B lymphocyte เมื่อได้รับการกระตุ้นจากแอนติเจนและไซโตไคน์จาก Helper T cell จะแบ่งตัวและพัฒนาไปเป็น Plasma cell ซึ่งทำหน้าที่สังเคราะห์และหลั่งแอนติบอดีจำเพาะปริมาณมหาศาล"
    },
    {
      id: 15,
      question: "Helper T cell (CD4+) ตรวจจับแอนติเจนที่ถูกนำเสนอบนเยื่อหุ้มเซลล์ร่วมกับโมเลกุลชนิดใด?",
      options: [
        "MHC Class I",
        "MHC Class II",
        "Immunoglobulin E",
        "Perforin complex"
      ],
      answer: 1,
      explanation: "Helper T cells (CD4+) ตรวจจับแอนติเจนจากภายนอกเซลล์ (Exogenous antigen) ที่ถูกนำเสนอบนโมเลกุล MHC Class II ซึ่งพบเฉพาะบน Antigen-Presenting Cells (APCs เช่น Macrophage, Dendritic cell, B cell)"
    },
    {
      id: 16,
      question: "Cytotoxic T cell (CD8+) ทำหน้าที่ทำลายเซลล์ที่ติดเชื้อไวรัสหรือเซลล์มะเร็ง โดยตรวจจับแอนติเจนที่คู่กับโมเลกุลชนิดใด?",
      options: [
        "MHC Class I",
        "MHC Class II",
        "Flagellin",
        "Histamine"
      ],
      answer: 0,
      explanation: "Cytotoxic T cells (CD8+) จะตรวจจับแอนติเจนที่สร้างขึ้นภายในเซลล์ (Endogenous antigens) เช่น ไวรัสเปปไทด์ ซึ่งถูกนำเสนอร่วมกับโมเลกุล MHC Class I ที่พบบนผิวเซลล์ที่มีนิวเคลียสทุกชนิดในร่างกาย"
    },
    {
      id: 17,
      question: "สารเคมีใดที่ Cytotoxic T cell หลั่งออกมาเพื่อเจาะรูบนเยื่อหุ้มเซลล์ของเซลล์เป้าหมาย?",
      options: [
        "Histamine",
        "Lysozyme",
        "Perforin",
        "Heparin"
      ],
      answer: 2,
      explanation: "Cytotoxic T cell หลั่งโปรตีน Perforin เข้าไปแทรกตัวและสร้างรูรั่วบนเยื่อหุ้มเซลล์เป้าหมาย ทำให้น้ำและเอนไซม์ Granzyme เข้าไปเหนี่ยวนำให้เซลล์เป้าหมายเกิดการตายแบบ Apoptosis"
    },
    {
      id: 18,
      question: "เหตุใดการตอบสนองทางภูมิคุ้มกันทุติยภูมิ (Secondary immune response) จึงเร็วกว่าและมีปริมาณแอนติบอดีสูงกว่าการตอบสนองปฐมภูมิ?",
      options: [
        "เพราะร่างกายมีแบคทีเรียประจำถิ่นเพิ่มมากขึ้น",
        "เพราะมีเซลล์ความจำ (Memory B cell และ Memory T cell) จากการสัมผัสเชื้อครั้งแรกพร้อมทำงานทันที",
        "เพราะด่านแรก (ผิวหนังและเยื่อบุ) ทำงานได้รวดเร็วขึ้น",
        "เพราะตับสร้างโปรตีนพลาสมาได้เร็วกว่าเดิมสิบเท่า"
      ],
      answer: 1,
      explanation: "ในการสัมผัสเชื้อครั้งที่สอง เซลล์ความจำ (Memory cells) ที่ถูกสร้างไว้แล้วจะจดจำแอนติเจนได้ทันที และแบ่งตัวกลายเป็น Effector cells ได้ในเวลาเพียง 2-7 วัน ทำให้สร้างแอนติบอดี (โดยเฉพาะ IgG) ได้รวดเร็วและเข้มข้นกว่าครั้งแรกหลายเท่า"
    },
    {
      id: 19,
      question: "การฉีดวัคซีนป้องกันโรคโควิด-19 หรือวัคซีนตับอักเสบบี จัดเป็นภูมิคุ้มกันประเภทใด?",
      options: [
        "ภูมิคุ้มกันรับมาตามธรรมชาติ (Naturally acquired passive immunity)",
        "ภูมิคุ้มกันรับมาโดยมนุษย์สร้างขึ้น (Artificially acquired passive immunity)",
        "ภูมิคุ้มกันก่อเองโดยมนุษย์สร้างขึ้น (Artificially acquired active immunity)",
        "ภูมิคุ้มกันก่อเองตามธรรมชาติ (Naturally acquired active immunity)"
      ],
      answer: 2,
      explanation: "วัคซีนคือแอนติเจนที่ถูกทำให้อ่อนฤทธิ์หรือชิ้นส่วนของเชื้อโรค ฉีดเข้าไปเพื่อกระตุ้นให้ระบบภูมิคุ้มกันของร่างกายสร้างแอนติบอดีและเซลล์ความจำขึ้นมาเอง จึงจัดเป็น Artificially acquired active immunity"
    },
    {
      id: 20,
      question: "กรณีใดต่อไปนี้จัดเป็น 'ภูมิคุ้มกันรับมา' (Passive immunity)?",
      options: [
        "เด็กเป็นโรคอีสุกอีใสแล้วหาย ทำให้ไม่เป็นซ้ำอีก",
        "การฉีดวัคซีนป้องกันบาดทะยัก (Toxoid)",
        "การฉีดเซรุ่มแก้พิษงูให้แก่ผู้ที่ถูกงูกัด",
        "การฉีดวัคซีน BCG ป้องกันวัณโรคในเด็กแรกเกิด"
      ],
      answer: 2,
      explanation: "เซรุ่มแก้พิษงู (Antivenom) คือแอนติบอดีสำเร็จรูปที่สกัดมาจากสัตว์ ฉีดเพื่อให้ไปทำลายพิษงูทันที ร่างกายไม่ได้สร้างเอง จึงเป็นภูมิคุ้มกันรับมา (Passive immunity) ซึ่งออกฤทธิ์เร็วแต่อยู่ได้ไม่นานและไม่มี Memory cells"
    },
    {
      id: 21,
      question: "ข้อใดเปรียบเทียบระหว่างวัคซีน (Vaccine) และเซรุ่ม (Serum) ได้อย่างถูกต้อง?",
      options: [
        "วัคซีนคือแอนติบอดี เซรุ่มคือแอนติเจน",
        "วัคซีนให้ผลป้องกันทันที เซรุ่มต้องรอ 2-3 สัปดาห์",
        "วัคซีนกระตุ้นให้ร่างกายสร้าง Memory cell ส่วนเซรุ่มไม่สร้าง Memory cell",
        "วัคซีนใช้รักษาโรคที่กำลังแสดงอาการเฉียบพลัน ส่วนเซรุ่มใช้ฉีดป้องกันระยะยาว"
      ],
      answer: 2,
      explanation: "วัคซีนคือแอนติเจนที่กระตุ้นภูมิคุ้มกันก่อเอง (Active) ทำให้เกิด Memory cells ป้องกันได้นาน ส่วนเซรุ่มคือแอนติบอดีสำเร็จรูป (Passive) ใช้รักษาฉุกเฉิน ออกฤทธิ์ทันทีแต่อยู่ได้ชั่วคราวและไม่มีการสร้าง Memory cells"
    },
    {
      id: 22,
      question: "บุคคลที่มีหมู่เลือด AB ในระบบ ABO จะมีแอนติเจนบนผิวเซลล์เม็ดเลือดแดงและแอนติบอดีในพลาสมาอย่างไร?",
      options: [
        "มีแอนติเจน A และ B บนเม็ดเลือดแดง, ไม่มีแอนติบอดีในพลาสมา",
        "ไม่มีแอนติเจนบนเม็ดเลือดแดง, มีทั้ง Anti-A และ Anti-B ในพลาสมา",
        "มีแอนติเจน A บนเม็ดเลือดแดง, มี Anti-B ในพลาสมา",
        "มีแอนติเจน B บนเม็ดเลือดแดง, มี Anti-A ในพลาสมา"
      ],
      answer: 0,
      explanation: "คนหมู่เลือด AB จะมีทั้งแอนติเจน A และแอนติเจน B บนผิวเม็ดเลือดแดง แต่ไม่มีทั้งแอนติบอดี Anti-A และ Anti-B ในพลาสมา จึงสามารถรับเม็ดเลือดแดงได้จากทุกหมู่ (Universal recipient)"
    },
    {
      id: 23,
      question: "ในการให้เลือดแก่ผู้ป่วย หลักการสำคัญที่สุดเพื่อความปลอดภัยคืออะไร?",
      options: [
        "แอนติเจนของผู้รับต้องไม่ตรงกับแอนติบอดีของผู้ให้",
        "แอนติเจนของผู้ให้ต้องไม่ตรงกับแอนติบอดีของผู้รับ",
        "ผู้ให้ต้องมีหมู่เลือดเดียวกับผู้รับเสมอ ไม่สามารถให้ข้ามหมู่ได้เด็ดขาด",
        "ตรวจเฉพาะหมู่เลือดระบบ ABO โดยไม่ต้องคำนึงถึงระบบ Rh"
      ],
      answer: 1,
      explanation: "หลักสำคัญของการให้เลือดคือ 'แอนติเจนของผู้ให้ (Donor Antigen) ต้องไม่ทำปฏิกิริยากับแอนติบอดีของผู้รับ (Recipient Antibody)' เพราะหากตรงกัน แอนติบอดีของผู้รับจะทำลายเม็ดเลือดแดงของผู้ให้จนแตก (Hemolysis) และเป็นอันตรายถึงชีวิต"
    },
    {
      id: 24,
      question: "อาการ Erythroblastosis fetalis (เม็ดเลือดแดงทารกแตกในครรภ์) มีโอกาสเกิดขึ้นได้ในกรณีครอบครัวใด?",
      options: [
        "แม่ Rh- พ่อ Rh+ และลูกคนแรกเป็น Rh-",
        "แม่ Rh+ พ่อ Rh- และลูกคนที่สองเป็น Rh+",
        "แม่ Rh- พ่อ Rh+ และตั้งครรภ์ลูกที่เป็น Rh+ คนที่สองขึ้นไป",
        "แม่ Rh- พ่อ Rh- และลูกทุกคนเป็น Rh-"
      ],
      answer: 2,
      explanation: "เกิดเมื่อแม่มีเลือดกลุ่ม Rh- ตั้งครรภ์ลูกคนแรกที่เป็น Rh+ ในระหว่างคลอดเลือดลูกจะสัมผัสแม่ ทำให้แม่สร้างแอนติบอดี Anti-Rh (IgG) ต่อมาเมื่อตั้งครรภ์ลูกคนที่สองที่เป็น Rh+ แอนติบอดี IgG ของแม่จะผ่านรกไปทำลายเม็ดเลือดแดงของลูก"
    },
    {
      id: 25,
      question: "เซลล์ใดในร่างกายที่ทำหน้าที่เป็น Antigen-Presenting Cell (APC) นำเสนอแอนติเจนให้ Helper T cell?",
      options: [
        "Erythrocyte, Platelet, Neutrophil",
        "Dendritic cell, Macrophage, B cell",
        "Basophil, Mast cell, Eosinophil",
        "Cytotoxic T cell, NK cell, Plasma cell"
      ],
      answer: 1,
      explanation: "เซลล์นำเสนอแอนติเจน (Professional APCs) คือ Dendritic cells, Macrophages และ B cells โดยเซลล์เหล่านี้จะนำชิ้นส่วนแอนติเจนมาจัดแสดงร่วมกับ MHC Class II บนผิวเซลล์เพื่อกระตุ้น Helper T cell"
    },
    {
      id: 26,
      question: "อาการสำคัญ 4 ประการของการอักเสบ (Cardinal signs of inflammation) ได้แก่ข้อใด?",
      options: [
        "คัน, มีหนอง, ตัวซีด, ความดันโลหิตลด",
        "ปวด (Pain), บวม (Swelling), แดง (Redness), ร้อน (Warmth)",
        "มีไข้, ปวดศีรษะ, เบื่ออาหาร, คลื่นไส้",
        "แผลแห้ง, ตกสะเก็ด, ชา, เลือดแข็งตัว"
      ],
      answer: 1,
      explanation: "อาการคลาสสิกของการอักเสบเฉียบพลัน 4 ประการ ได้แก่ Rubor (แดง), Calor (ร้อน), Tumor (บวม), และ Dolor (ปวด) อันเนื่องมาจากหลอดเลือดขยายตัว เลือดมาเลี้ยงเพิ่มขึ้น และการซึมผ่านของสารน้ำสู่เนื้อเยื่อ"
    },
    {
      id: 27,
      question: "Natural Killer (NK) cell จัดเป็นเซลล์ในระบบภูมิคุ้มกันแบบใดและมีหน้าที่อย่างไร?",
      options: [
        "Adaptive immunity ทำหน้าที่หลั่งแอนติบอดี IgM",
        "Innate immunity ทำหน้าที่ทำลายเซลล์ที่ติดเชื้อไวรัสและเซลล์มะเร็ง",
        "Adaptive immunity ทำหน้าที่กินแบคทีเรียด้วยเท้าเทียม",
        "First line of defense ทำหน้าที่เป็นเกราะป้องกันทางกายภาพ"
      ],
      answer: 1,
      explanation: "Natural killer (NK) cell เป็นลิมโฟไซต์ในระบบ Innate immunity (ด่านที่ 2) ทำหน้าที่ตรวจจับและทำลายเซลล์ร่างกายที่มีความผิดปกติ เช่น เซลล์ที่ติดเชื้อไวรัสและเซลล์เนื้องอก/มะเร็ง โดยไม่ต้องผ่านการกระตุ้นที่จำเพาะเจาะจงล่วงหน้า"
    },
    {
      id: 28,
      question: "เอนไซม์ Lysozyme ที่พบในน้ำตาและน้ำลาย ทำลายเชื้อแบคทีเรียด้วยกลไกใด?",
      options: [
        "ยับยั้งการจำลองตัวของดีเอ็นเอแบคทีเรีย",
        "ย่อยสลายพันธะในเปปทิโดไกลแคนของผนังเซลล์แบคทีเรีย",
        "จับกับเยื่อหุ้มเซลล์ชั้นในทำให้เสียสมดุลไอออน",
        "ยับยั้งการสร้างโปรตีนที่ไรโบโซมของแบคทีเรีย"
      ],
      answer: 1,
      explanation: "เอนไซม์ไลโซไซม์ (Lysozyme) ย่อยพันธะเคมีระหว่าง N-acetylglucosamine และ N-acetylmuramic acid ในโครงสร้าง Peptidoglycan ของผนังเซลล์แบคทีเรีย (โดยเฉพาะแบคทีเรียแกรมบวก) ทำให้เซลล์แตก"
    },
    {
      id: 29,
      question: "ความผิดปกติแบบ Autoimmune disease (โรคแพ้ภูมิตัวเอง) เกิดจากสาเหตุใด?",
      options: [
        "ระบบภูมิคุ้มกันไม่สามารถแยกแยะ Self-antigen ออกจาก Non-self antigen ได้ จึงทำลายเซลล์ของตนเอง",
        "ร่างกายขาดเซลล์ Macrophage อย่างถาวร",
        "เซลล์เม็ดเลือดแดงถูกทำลายจากเอนไซม์ Lysozyme",
        "ร่างกายผลิตแอนติบอดี IgA มากเกินไปในสารคัดหลั่ง"
      ],
      answer: 0,
      explanation: "โรคแพ้ภูมิตัวเอง (Autoimmune diseases เช่น SLE, รูมาตอยด์) เกิดจากความบกพร่องของระบบภูมิคุ้มกันในการแยกแยะสิ่งแปลกปลอม (Loss of self-tolerance) ทำให้ระบบภูมิคุ้มกันเข้าใจผิดว่าเซลล์หรือเนื้อเยื่อของตนเองเป็นสิ่งแปลกปลอมและเข้าทำลาย"
    },
    {
      id: 30,
      question: "ไวรัส HIV ที่ก่อให้เกิดโรคเอดส์ (AIDS) ทำลายเซลล์เม็ดเลือดขาวชนิดใดเป็นเป้าหมายหลัก จนทำให้ระบบภูมิคุ้มกันล้มเหลว?",
      options: [
        "Neutrophil",
        "Eosinophil",
        "CD4+ Helper T lymphocyte",
        "Basophil"
      ],
      answer: 2,
      explanation: "ไวรัส HIV จับกับโปรตีนตัวรับ CD4 บนผิวของ Helper T lymphocyte (CD4+ T cell) แล้วเข้าทำลายเซลล์เหล่านี้ เมื่อ Helper T cell ลดลงอย่างมาก ระบบภูมิคุ้มกันทั้งแบบ Humoral และ Cell-mediated จะไม่สามารถทำงานได้ ทำให้เกิดโรคติดเชื้อฉวยโอกาส"
    },
    {
      id: 31,
      question: "ข้อใดเป็นตัวอย่างของการทำงานของระบบภูมิคุ้มกันแบบ Cell-mediated immunity (ภูมิคุ้มกันที่อาศัยเซลล์)?",
      options: [
        "แอนติบอดี IgG เข้าจับกับท็อกซินของเชื้อบาดทะยัก",
        "Cytotoxic T cell หลั่งเพอร์ฟอรินทำลายเซลล์ปอดที่ติดเชื้อไวรัสไข้หวัดใหญ่",
        "แอนติบอดี IgM ทำปฏิกิริยาตกตะกอนเม็ดเลือดแดงต่างหมู่",
        "กรดไฮโดรคลอริกในกระเพาะอาหารทำลายแบคทีเรียที่ปนเปื้อนมากับอาหาร"
      ],
      answer: 1,
      explanation: "Cell-mediated immunity เป็นกลไกที่ใช้ T lymphocyte โดยตรง (ไม่ใช่แอนติบอดีละลายในพลาสมา) เช่น Cytotoxic T cells หรือ Macrophages ที่เข้าทำลายเซลล์ที่ติดเชื้อภายในหรือเซลล์มะเร็ง"
    },
    {
      id: 32,
      question: "สารเคมีกลุ่มใดที่ทำหน้าที่เป็นสารเคมีส่งสัญญาณระหว่างเซลล์ในระบบภูมิคุ้มกัน (เช่น Interleukin, Interferon)?",
      options: [
        "Cytokines",
        "Immunoglobulins",
        "Electrolytes",
        "Steroid hormones"
      ],
      answer: 0,
      explanation: "Cytokines (ไซโตไคน์) เป็นกลุ่มโปรตีนขนาดเล็กที่เซลล์ภูมิคุ้มกัน (เช่น Helper T cell, Macrophage) หลั่งออกมาเพื่อส่งสัญญาณ สื่อสาร และควบคุมการทำงาน กระตุ้นการแบ่งตัวของเซลล์ภูมิคุ้มกันชนิดอื่นๆ"
    },
    {
      id: 33,
      question: "ทารกที่ได้รับน้ำนมแม่ที่มีสารภูมิคุ้มกัน ถือเป็นภูมิคุ้มกันประเภทใด?",
      options: [
        "Naturally acquired active immunity",
        "Artificially acquired active immunity",
        "Naturally acquired passive immunity",
        "Artificially acquired passive immunity"
      ],
      answer: 2,
      explanation: "การได้รับแอนติบอดี (โดยเฉพาะ IgA) ผ่านน้ำนมแม่ หรือ IgG ผ่านรก จัดเป็นภูมิคุ้มกันรับมาตามธรรมชาติ (Naturally acquired passive immunity) เนื่องจากทารกรับแอนติบอดีสำเร็จรูปมาโดยตรงจากกระบวนการธรรมชาติ"
    },
    {
      id: 34,
      question: "ในการทดสอบทางภูมิคุ้มกัน หากผู้ป่วยรายหนึ่งมีระดับ IgM ต่อไวรัสชนิดหนึ่งสูงมาก แต่แทบไม่พบ IgG แสดงว่าผู้ป่วยรายนี้น่าจะอยู่ในสภาวะใด?",
      options: [
        "เพิ่งติดเชื้อไวรัสชนิดนี้เป็นครั้งแรกในระยะเริ่มต้น (Recent / Acute primary infection)",
        "เคยติดเชื้อไวรัสนี้มาแล้วหลายปีในอดีต (Past infection)",
        "ได้รับวัคซีนป้องกันไวรัสนี้มาแล้วอย่างน้อย 5 ปี",
        "ร่างกายมีภูมิคุ้มกันถาวรต่อไวรัสชนิดนี้แล้ว"
      ],
      answer: 0,
      explanation: "ในการตอบสนองปฐมภูมิ (Primary response) แอนติบอดีตัวแรกที่ถูกสร้างขึ้นในระยะแรกของการติดเชื้อคือ IgM ก่อนที่ต่อมาจะสลับคลาสไปเป็น IgG ดังนั้นการพบ IgM ในระดับสูงบ่งชี้ว่าเพิ่งติดเชื้อมาสดๆ ร้อนๆ (Acute infection)"
    },
    {
      id: 35,
      question: "ส่วนใดของลำไส้ใหญ่ที่มีบทบาทสำคัญในการเป็นที่พักอาศัยของจุลินทรีย์ชนิดดี และมีเนื้อเยื่อภูมิคุ้มกันหนาแน่น?",
      options: [
        "Duodenum",
        "Jejunum",
        "Appendix (ไส้ติ่ง)",
        "Esophagus"
      ],
      answer: 2,
      explanation: "ตามข้อมูลในสไลด์ Appendix (ไส้ติ่ง) ทำหน้าที่เป็นแหล่งกบดานและสะสมจุลินทรีย์ประจำถิ่นชนิดดี (Safe house for gut commensals) และมีบทบาททางภูมิคุ้มกันในการฟื้นฟูระบบชีวนิเวศในลำไส้"
    },
    {
      id: 36,
      question: "การได้รับเซรุ่มแก้พิษงู (Antivenom) ไม่สามารถป้องกันพิษงูในการถูกกัดครั้งต่อไปในอีก 2 ปีข้างหน้าได้ เพราะเหตุผลใด?",
      options: [
        "เซรุ่มมีแอนติบอดีโมเลกุลขนาดใหญ่เกินไป",
        "เซรุ่มเป็นภูมิคุ้มกันรับมา (Passive) จึงไม่มีการสร้างเซลล์ความจำ (Memory cells)",
        "พิษงูจะเปลี่ยนรหัสพันธุกรรมอย่างรวดเร็วทุกเดือน",
        "ร่างกายจะต่อต้านเซรุ่มจนทำลายระบบภูมิคุ้มกันด่านแรก"
      ],
      answer: 1,
      explanation: "การให้เซรุ่มเป็นการให้แอนติบอดีสำเร็จรูป ซึ่งร่างกายไม่ได้ถูกกระตุ้นให้คัดเลือกและเพิ่มจำนวน B cell/T cell ด้วยตัวเอง จึงไม่ก่อให้เกิด Memory cells แอนติบอดีที่ฉีดเข้าไปจะสลายตัวหมดภายในเวลาไม่กี่สัปดาห์ ร่างกายจึงไม่มีภูมิคุ้มกันหลงเหลือสำหรับการถูกกัดในอนาคต"
    }
  ]
};
