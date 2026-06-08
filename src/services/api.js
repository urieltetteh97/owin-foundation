const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const api = {
  // Contacts
  async submitContact(data) {
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit contact form');
    }
    return response.json();
  },

  async getContacts() {
    const response = await fetch(`${API_URL}/contacts`);
    if (!response.ok) throw new Error('Failed to fetch contacts');
    return response.json();
  },

  async updateContactStatus(id, status) {
    const response = await fetch(`${API_URL}/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error('Failed to update contact');
    return response.json();
  },

  // Campaigns
  async getCampaigns() {
    const response = await fetch(`${API_URL}/campaigns`);
    if (!response.ok) throw new Error('Failed to fetch campaigns');
    return response.json();
  },

  async getActiveCampaigns() {
    const response = await fetch(`${API_URL}/campaigns/active`);
    if (!response.ok) throw new Error('Failed to fetch active campaigns');
    return response.json();
  },

  async getCampaign(id) {
    const response = await fetch(`${API_URL}/campaigns/${id}`);
    if (!response.ok) throw new Error('Failed to fetch campaign');
    return response.json();
  },

  async createCampaign(data) {
    const response = await fetch(`${API_URL}/campaigns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create campaign');
    return response.json();
  },

  async updateCampaign(id, data) {
    const response = await fetch(`${API_URL}/campaigns/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update campaign');
    return response.json();
  },

  async updateCampaignRaised(id, amount) {
    const response = await fetch(`${API_URL}/campaigns/${id}/raised`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    if (!response.ok) throw new Error('Failed to update campaign raised amount');
    return response.json();
  },

  // Teams
  async getTeam() {
    const response = await fetch(`${API_URL}/teams`);
    if (!response.ok) throw new Error('Failed to fetch team');
    return response.json();
  },

  async getTeamMember(id) {
    const response = await fetch(`${API_URL}/teams/${id}`);
    if (!response.ok) throw new Error('Failed to fetch team member');
    return response.json();
  },

  async createTeamMember(data) {
    const response = await fetch(`${API_URL}/teams`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create team member');
    return response.json();
  },

  async updateTeamMember(id, data) {
    const response = await fetch(`${API_URL}/teams/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update team member');
    return response.json();
  },
};

export default api;
