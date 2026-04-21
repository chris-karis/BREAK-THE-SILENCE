#!/usr/bin/env node

// Simple HTML validation script
const fs = require('fs');
const path = require('path');

// Find all HTML files in the project
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Basic validation checks
function validateHtml(htmlContent, filePath) {
  const errors = [];
  
  // Check for proper DOCTYPE declaration
  if (!htmlContent.includes('<!DOCTYPE html>')) {
    errors.push('Missing <!DOCTYPE html> declaration');
  }
  
  // Check for title tag
  if (!/<title>.*<\/title>/.test(htmlContent)) {
    errors.push('Missing <title> tag');
  }
  
  // Check for meta charset
  if (!htmlContent.toLowerCase().includes('charset=')) {
    errors.push('Missing charset declaration in meta tag');
  }
  
  // Check for alt attributes in img tags
  const imgTags = htmlContent.match(/<img\s+[^>]*?>/gi) || [];
  imgTags.forEach(imgTag => {
    if (!imgTag.toLowerCase().includes('alt=')) {
      errors.push(`Missing alt attribute in img tag: ${imgTag.substring(0, 50)}...`);
    }
  });
  
  return errors;
}

// Main validation process
const htmlFiles = findHtmlFiles('.');
let totalErrors = 0;

console.log('🔍 Starting HTML validation...\n');

htmlFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const errors = validateHtml(content, filePath);
    
    if (errors.length > 0) {
      console.log(`❌ ${filePath}:`);
      errors.forEach(error => {
        console.log(`   • ${error}`);
      });
      console.log('');
      totalErrors += errors.length;
    } else {
      console.log(`✅ ${filePath} - OK`);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
    totalErrors++;
  }
});

console.log('\n📊 Validation Summary:');
console.log(`Total HTML files checked: ${htmlFiles.length}`);
console.log(`Total errors found: ${totalErrors}`);

if (totalErrors > 0) {
  process.exit(1);
} else {
  console.log('🎉 All files passed validation!');
}