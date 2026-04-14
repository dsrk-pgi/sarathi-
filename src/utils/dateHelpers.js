export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const getDaysUntil = (dateString) => {
  if (!dateString) return null;
  const today = new Date();
  const targetDate = new Date(dateString);
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const isExpired = (dateString) => {
  if (!dateString) return false;
  return getDaysUntil(dateString) < 0;
};

export const isExpiringSoon = (dateString, days = 15) => {
  if (!dateString) return false;
  const daysUntil = getDaysUntil(dateString);
  return daysUntil >= 0 && daysUntil <= days;
};

export const formatCurrency = (amount) => {
  return `₹${parseFloat(amount).toLocaleString('en-IN')}`;
};
